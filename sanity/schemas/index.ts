/**
 * Schema Index — Kocatürk Okulları
 *
 * Tüm Sanity schema tiplerini dışa aktarır.
 * Yeni schema eklendiğinde buraya da import edilmeli.
 */

import { achievementSchema } from "./achievement";
import { campusSchema } from "./campus";
import { newsSchema } from "./news";
import { programSchema } from "./program";

export const schemaTypes = [campusSchema, programSchema, achievementSchema, newsSchema];
