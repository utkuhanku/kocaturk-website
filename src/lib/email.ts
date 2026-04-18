import type { ReactElement } from "react";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_ADDRESS = "Kocatürk Okulları <info@kocaturk.k12.tr>";
const TO_ADDRESS = process.env.EMAIL_TO ?? "info@kocaturk.k12.tr";

interface SendEmailOptions {
  to?: string;
  subject: string;
  react: ReactElement;
}

interface SendEmailResult {
  success: boolean;
  id?: string;
  error?: string;
}

export async function sendEmail({
  to = TO_ADDRESS,
  subject,
  react,
}: SendEmailOptions): Promise<SendEmailResult> {
  if (!resend) {
    // biome-ignore lint/suspicious/noConsole: dev fallback logging
    console.log("[email dev]", { to, subject });
    return { success: true, id: "dev-mode" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to,
      subject,
      react,
    });

    if (error) {
      // biome-ignore lint/suspicious/noConsole: server-side error logging
      console.error("[email error]", error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Bilinmeyen hata";
    // biome-ignore lint/suspicious/noConsole: server-side error logging
    console.error("[email error]", message);
    return { success: false, error: message };
  }
}
