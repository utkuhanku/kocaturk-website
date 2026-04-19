import { z } from "zod";

const telefon = z
  .string()
  .trim()
  .regex(/^0?5\d{9}$/, "Geçerli bir cep telefonu numarası girin (05XX XXX XX XX)");

const email = z.string().trim().toLowerCase().email("Geçerli bir e-posta adresi girin");

const kvkkOnay = z.boolean().refine((v) => v === true, {
  message: "KVKK aydınlatma metnini kabul etmeniz gerekmektedir",
});

// Honeypot — dolu olursa spam
const honeypot = z.string().max(0, "Spam tespit edildi").optional();

export const onKayitSchema = z.object({
  veliAdi: z.string().trim().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  veliTelefon: telefon,
  veliEmail: email,
  cocukAdi: z.string().trim().min(2, "Çocuğun adı en az 2 karakter olmalıdır"),
  cocukYas: z.coerce.number().min(3, "Yaş en az 3 olmalıdır").max(18, "Yaş en fazla 18 olabilir"),
  cinsiyet: z.enum(["kiz", "erkek", "belirtmek-istemiyorum"]).optional(),
  kademe: z.enum(
    ["anaokulu", "ilkokul", "ortaokul", "anadolu-lisesi", "fen-lisesi", "havacilik-lisesi"],
    { message: "Lütfen bir kademe seçin" },
  ),
  kampus: z.enum(["turgutlu", "gaziemir", "uckuyular", "kemalpasa", "tire", "henuz-bilmiyorum"], {
    message: "Lütfen bir kampüs seçin",
  }),
  mesaj: z.string().trim().max(500, "Mesaj en fazla 500 karakter olabilir").optional(),
  kvkkOnay,
  website: honeypot,
});

export const iletisimSchema = z.object({
  isim: z.string().trim().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  email,
  telefon: telefon.optional().or(z.literal("")),
  konu: z.enum(["genel", "kayit", "kariyer", "basin"], {
    message: "Lütfen bir konu seçin",
  }),
  mesaj: z.string().trim().min(10, "Mesaj en az 10 karakter olmalıdır").max(1000),
  kvkkOnay,
  website: honeypot,
});

export const kariyerSchema = z.object({
  isim: z.string().trim().min(2, "Ad Soyad en az 2 karakter olmalıdır"),
  email,
  telefon,
  pozisyon: z.string().trim().min(2, "Lütfen başvurmak istediğiniz pozisyonu belirtin"),
  cvLink: z
    .string()
    .url("Geçerli bir URL girin")
    .optional()
    .or(z.literal(""))
    .transform((v) => (v === "" ? undefined : v)),
  mesaj: z.string().trim().min(10, "Mesaj en az 10 karakter olmalıdır").max(1000),
  kvkkOnay,
  website: honeypot,
});

export type OnKayitFormData = z.infer<typeof onKayitSchema>;
export type IletisimFormData = z.infer<typeof iletisimSchema>;
export type KariyerFormData = z.infer<typeof kariyerSchema>;
