/**
 * Campus Schema — Kampüs
 *
 * @see .docs/08-CONTENT-INVENTORY.md Bölüm 4
 */

import { defineField, defineType } from "sanity";

export const campusSchema = defineType({
  name: "campus",
  title: "Kampüs",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Kampüs Adı",
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
      name: "il",
      title: "İl",
      type: "string",
      validation: (rule) => rule.required(),
      initialValue: "İzmir",
    }),

    defineField({
      name: "ilce",
      title: "İlçe",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "badge",
      title: "Kampüs Rozeti",
      type: "string",
      options: {
        list: [
          { title: "Ana Kampüs", value: "ana" },
          { title: "İkinci Ana Kampüs", value: "ikinci-ana" },
        ],
      },
    }),

    defineField({
      name: "kademeler",
      title: "Kademeler",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Anaokulu", value: "anaokulu" },
          { title: "İlkokul", value: "ilkokul" },
          { title: "Ortaokul", value: "ortaokul" },
          { title: "Anadolu Lisesi", value: "anadolu-lisesi" },
          { title: "Fen Lisesi", value: "fen-lisesi" },
          { title: "Havacılık Lisesi", value: "havacilik-lisesi" },
        ],
      },
    }),

    defineField({
      name: "ogrenciSayisi",
      title: "Öğrenci Sayısı",
      type: "number",
      validation: (rule) => rule.min(0).integer(),
    }),

    defineField({
      name: "ogretmenSayisi",
      title: "Öğretmen Sayısı",
      type: "number",
      validation: (rule) => rule.min(0).integer(),
    }),

    defineField({
      name: "adres",
      title: "Adres",
      type: "text",
      rows: 3,
    }),

    defineField({
      name: "telefon",
      title: "Telefon",
      type: "string",
    }),

    defineField({
      name: "email",
      title: "E-posta",
      type: "string",
      validation: (rule) => rule.email(),
    }),

    defineField({
      name: "mudur",
      title: "Müdür",
      type: "object",
      fields: [
        defineField({
          name: "isim",
          title: "İsim Soyisim",
          type: "string",
        }),
        defineField({
          name: "pozisyon",
          title: "Pozisyon",
          type: "string",
          initialValue: "Okul Müdürü",
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
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "hikaye",
      title: "Kampüs Hikâyesi",
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
        },
      ],
    }),

    defineField({
      name: "tesisler",
      title: "Tesisler",
      type: "array",
      of: [{ type: "string" }],
      description: "Örn: Spor Salonu, Kütüphane, Robotik Atölyesi",
    }),

    defineField({
      name: "koordinatlar",
      title: "Koordinatlar",
      type: "object",
      fields: [
        defineField({
          name: "lat",
          title: "Enlem (Latitude)",
          type: "number",
          validation: (rule) => rule.min(-90).max(90),
        }),
        defineField({
          name: "lng",
          title: "Boylam (Longitude)",
          type: "number",
          validation: (rule) => rule.min(-180).max(180),
        }),
      ],
    }),

    defineField({
      name: "heroImage",
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
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "ilce",
      media: "heroImage",
    },
  },
});
