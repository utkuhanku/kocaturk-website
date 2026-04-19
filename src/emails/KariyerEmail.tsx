import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { KariyerFormData } from "@/lib/validators";

interface KariyerEmailProps {
  data: KariyerFormData;
  submittedAt: string;
}

export function KariyerEmail({ data, submittedAt }: KariyerEmailProps) {
  return (
    <Html lang="tr">
      <Head />
      <Preview>
        Kariyer başvurusu — {data.isim} · {data.pozisyon}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Kocatürk Okulları</Heading>
            <Text style={subtitle}>Yeni Kariyer Başvurusu</Text>
          </Section>

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Başvuran Bilgileri
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
                <tr>
                  <td style={tdLabel}>Telefon</td>
                  <td style={tdValue}>{data.telefon}</td>
                </tr>
                <tr>
                  <td style={tdLabel}>Pozisyon</td>
                  <td style={tdValue}>{data.pozisyon}</td>
                </tr>
                {data.cvLink && (
                  <tr>
                    <td style={tdLabel}>CV / Portfolio</td>
                    <td style={tdValue}>
                      <Link href={data.cvLink} style={cvLink}>
                        {data.cvLink}
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>
              Ön Yazı
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

const cvLink = {
  fontSize: "13px",
  color: "#F2581C",
  textDecoration: "underline",
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
