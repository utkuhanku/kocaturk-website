/**
 * News Schema — Haber / Duyuru
 *
 * @see .docs/08-CONTENT-INVENTORY.md Bölüm 12
 */

import { defineField, defineType } from "sanity";

export const newsSchema = defineType({
  name: "news",
  title: "Haber",
  type: "document",
  fields: [
    defineField({
      name: "baslik",
      title: "Başlık",
      type: "string",
      validation: (rule) => rule.required().min(5).max(100),
      description: "60-80 karakter önerilir",
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
      name: "ozet",
      title: "Özet",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(50).max(200),
      description: "140-180 karakter önerilir",
    }),

    defineField({
      name: "kategori",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Akademik", value: "akademik" },
          { title: "Etkinlik", value: "etkinlik" },
          { title: "Duyuru", value: "duyuru" },
          { title: "Başarı", value: "basari" },
          { title: "Spor", value: "spor" },
          { title: "Sanat", value: "sanat" },
          { title: "Uluslararası", value: "uluslararasi" },
        ],
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "tarih",
      title: "Yayın Tarihi",
      type: "datetime",
      options: { dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm" },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "heroGorsel",
      title: "Hero Görsel",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Metin",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "body",
      title: "İçerik",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Başlık H2", value: "h2" },
            { title: "Başlık H3", value: "h3" },
            { title: "Alıntı", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Kalın", value: "strong" },
              { title: "Vurgu (turuncu)", value: "em" },
              { title: "Kod", value: "code" },
            ],
            annotations: [
              {
                title: "Link",
                name: "link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "URL",
                    type: "url",
                    validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                  defineField({
                    name: "blank",
                    title: "Yeni sekmede aç",
                    type: "boolean",
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
          lists: [
            { title: "Madde", value: "bullet" },
            { title: "Numaralı", value: "number" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Metin",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Açıklama Yazısı",
              type: "string",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "galeri",
      title: "Galeri",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Metin",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "etiketler",
      title: "Etiketler",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),

    defineField({
      name: "yazar",
      title: "Yazar",
      type: "string",
      description: "Haber yazarı / editör",
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
      media: "heroGorsel",
    },
  },
});
