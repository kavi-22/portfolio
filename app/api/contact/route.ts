import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Simple in-memory rate limiting map (IP -> last submit timestamp)
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();

    // Check rate limit: 1 request every 30 seconds per IP
    const lastRequest = rateLimitMap.get(ip);
    if (lastRequest && now - lastRequest < 30000) {
      return NextResponse.json(
        {
          success: false,
          message: "Please wait 30 seconds before sending another message.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot spam trap check
    if (honeypot && honeypot.trim() !== "") {
      // Silently return success to bot without sending email
      return NextResponse.json({
        success: true,
        message: "Message dispatched successfully.",
      });
    }

    // Server-side validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check your inputs.",
          errors,
        },
        { status: 400 }
      );
    }

    // Update rate limit timestamp
    rateLimitMap.set(ip, now);

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "kavi@example.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // Cleaned sanitized strings
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = (subject && typeof subject === "string" && subject.trim().length > 0)
      ? subject.trim()
      : `New Portfolio Inquiry from ${cleanName}`;
    const cleanMessage = message.trim();

    if (!resendApiKey) {
      // In local dev without key, log message safely and return success simulation
      console.warn(
        "⚠️ RESEND_API_KEY is not set in environment variables. Simulating email dispatch:\n",
        {
          from: fromEmail,
          to: recipientEmail,
          replyTo: cleanEmail,
          subject: cleanSubject,
          name: cleanName,
          message: cleanMessage,
        }
      );

      return NextResponse.json({
        success: true,
        message: "Your message has been received! (Dev Mode: configure RESEND_API_KEY in .env.local for production delivery).",
      });
    }

    const resend = new Resend(resendApiKey);

    // Send email to portfolio owner
    const emailResult = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [recipientEmail],
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #334155;">
          <h2 style="color: #38bdf8; margin-top: 0; font-size: 20px; border-bottom: 1px solid #334155; padding-bottom: 12px;">
            📬 New Portfolio Message Received
          </h2>
          <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>From:</strong> ${cleanName}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color: #38bdf8;">${cleanEmail}</a></p>
            <p style="margin: 0; font-size: 14px;"><strong>Subject:</strong> ${cleanSubject}</p>
          </div>
          <div style="background-color: #1e293b; padding: 16px; border-radius: 8px; border-left: 4px solid #38bdf8;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;"><strong>Message:</strong></p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #e2e8f0;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #64748b; text-align: center;">
            Sent securely via Next.js Portfolio Contact Handler
          </p>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Resend API error:", emailResult.error);
      return NextResponse.json(
        {
          success: false,
          message: emailResult.error.message || "Failed to deliver email through provider.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully. I'll get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact route exception:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again or reach out via email directly.",
      },
      { status: 500 }
    );
  }
}
