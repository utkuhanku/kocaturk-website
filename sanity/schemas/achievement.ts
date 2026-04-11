/**
 * Achievement Schema — Başarı
 *
 * @see .docs/08-CONTENT-INVENTORY.md Bölüm 11
 */

import { defineField, defineType } from "sanity";

export const achievementSchema = defineType({
  name: "achievement",
  title: "Başarı",
  type: "document",
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      validation: (rule) => rule.required().min(5).max(120),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "baslik",
        maxLength: 80,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "kategori",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Akademik", value: "akademik" },
          { title: "Sportif", value: "sportif" },
          { title: "Uluslararası", value: "uluslararasi" },
          { title: "Sanatsal", value: "sanatsal" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "tarih",
      title: "Tarih",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "ogrenciAdi",
      title: "Öğrenci Adı",
      type: "string",
      description: "KVKK onayı alınmış öğrenci adı",
    }),

    defineField({
      name: "yarismaAdi",
      title: "Yarışma / Etkinlik Adı",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "derece",
      title: "Derece",
      type: "string",
      description: "Örn: 1. (Birincilik), Türkiye Birincisi, Dünya 3.sü",
    }),

    defineField({
      name: "yer",
      title: "Yarışma Yeri",
      type: "string",
      description: "Örn: Roma, İtalya veya Ankara, Türkiye",
    }),

    defineField({
      name: "foto",
      title: "Fotoğraf",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Metin",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "featured",
      title: "Öne Çıkan",
      type: "boolean",
      initialValue: false,
      description: "Ana sayfada gösterilsin mi?",
    }),

    defineField({
      name: "aciklama",
      title: "Açıklama",
      type: "text",
      rows: 4,
      validation: (rule) => rule.max(500),
    }),
  ],

  orderings: [
    {
      title: "Tarihe Göre (Yeni → Eski)",
      name: "tarihDesc",
      by: [{ field: "tarih", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "baslik",
      subtitle: "tarih",
      media: "foto",
    },
  },
});
