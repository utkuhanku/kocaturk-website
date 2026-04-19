import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { IletisimFormData } from "@/lib/validators";

const KONU_LABELS: Record<string, string> = {
  genel: "Genel Bilgi",
  kayit: "Kayıt & Ön Kayıt",
  kariyer: "Kariyer Başvurusu",
  basin: "Basın & İletişim",
};

interface IletisimEmailProps {
  data: IletisimFormData;
  submittedAt: string;
}

export function IletisimEmail({ data, submittedAt }: IletisimEmailProps) {
  return (
    <Html lang="tr">
      <Head />
      <Preview>Yeni iletişim formu — {data.isim}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Kocatürk Okulları</Heading>
            <Text style={subtitle}>Yeni İletişim Formu Mesajı</Text>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Gönderen Bilgileri
            </Heading>
            <table style={table}>
              <tbody>
                <tr>
                  <td style={tdLabel}>Ad Soyad</td>
                  <td style={tdValue}>{data.isim}</td>
                </tr>
                <tr>
                  <td style={tdLabel}>E-posta</td>
                  <td style={tdValue}>{data.email}</td>
                </tr>
                {data.telefon && (
                  <tr>
                    <td style={tdLabel}>Telefon</td>
                    <td style={tdValue}>{data.telefon}</td>
                  </tr>
                )}
                <tr>
                  <td style={tdLabel}>Konu</td>
                  <td style={tdValue}>{KONU_LABELS[data.konu] ?? data.konu}</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Mesaj
            </Heading>
            <Text style={messageText}>{data.mesaj}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>Gönderilme zamanı: {submittedAt}</Text>
            <Text style={footerText}>Kocatürk Okulları — info@kocaturk.k12.tr</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
};

const header = {
  backgroundColor: "#1F2228",
  padding: "32px 40px",
};

const h1 = {
  color: "#F2581C",
  fontSize: "24px",
  fontWeight: "700",
  margin: "0 0 4px",
};

const subtitle = {
  color: "#9ca3af",
  fontSize: "14px",
  margin: "0",
};

const section = {
  padding: "24px 40px",
};

const h2 = {
  color: "#1F2228",
  fontSize: "16px",
  fontWeight: "700",
  margin: "0 0 16px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse" as const,
};

const tdLabel = {
  fontSize: "13px",
  color: "#6b7280",
  fontWeight: "600",
  paddingBottom: "8px",
  width: "140px",
  verticalAlign: "top" as const,
};

const tdValue = {
  fontSize: "13px",
  color: "#1F2228",
  paddingBottom: "8px",
  verticalAlign: "top" as const,
};

const messageText = {
  fontSize: "13px",
  color: "#1F2228",
  lineHeight: "1.6",
  margin: "0",
  padding: "12px",
  backgroundColor: "#f9fafb",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "0",
};

const footer = {
  backgroundColor: "#f9fafb",
  padding: "16px 40px",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0 0 4px",
};
