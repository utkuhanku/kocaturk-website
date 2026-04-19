import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { OnKayitEmail } from "@/emails/OnKayitEmail";
import { sendEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { onKayitSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") ?? "unknown";

  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Çok fazla istek gönderildi. Lütfen bir dakika bekleyin." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const result = onKayitSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Form verileri geçersiz.", issues: result.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const data = result.data;
  const submittedAt = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

  const emailResult = await sendEmail({
    subject: `Ön Kayıt: ${data.cocukAdi} — ${data.kademe}`,
    react: OnKayitEmail({ data, submittedAt }),
  });

  if (!emailResult.success) {
    return NextResponse.json({ error: "E-posta gönderilemedi." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
