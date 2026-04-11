/**
 * Program Schema — Eğitim Programı
 *
 * @see .docs/08-CONTENT-INVENTORY.md Bölüm 7
 */

import { defineField, defineType } from "sanity";

export const programSchema = defineType({
  name: "program",
  title: "Eğitim Programı",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Program Adı",
      type: "string",
      validation: (rule) => rule.required().min(3).max(100),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 80,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "icon",
      title: "Boxicons İkon Sınıfı",
      type: "string",
      description: "Örn: 'bx bx-brain' veya 'bx bx-rocket'",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "kisaAciklama",
      title: "Kısa Açıklama",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(200),
    }),

    defineField({
      name: "detay",
      title: "Detaylı Açıklama",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Başlık H2", value: "h2" },
            { title: "Başlık H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Kalın", value: "strong" },
              { title: "Vurgu (turuncu)", value: "em" },
            ],
          },
          lists: [{ title: "Madde", value: "bullet" }],
        },
      ],
    }),

    defineField({
      name: "yasAraligi",
      title: "Yaş Aralığı",
      type: "string",
      description: "Örn: 4-7 yaş veya 10-14 yaş",
    }),

    defineField({
      name: "kademeler",
      title: "Uygulandığı Kademeler",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Anaokulu", value: "anaokulu" },
          { title: "İlkokul", value: "ilkokul" },
          { title: "Ortaokul", value: "ortaokul" },
          { title: "Lise", value: "lise" },
        ],
      },
    }),

    defineField({
      name: "featured",
      title: "Öne Çıkan",
      type: "boolean",
      initialValue: false,
      description: "Ana sayfada gösterilsin mi?",
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "kisaAciklama",
    },
  },
});
