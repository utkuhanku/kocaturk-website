/**
 * CampusMapbox — İnteraktif kampüs haritası (Mapbox GL JS)
 *
 * 'use client' — DOM erişimi + mapbox-gl init gerektirir.
 * NEXT_PUBLIC_MAPBOX_TOKEN yoksa ContentNote placeholder döner.
 * Dark tema (mapbox://styles/mapbox/dark-v11), turuncu marker'lar.
 * badge="ana"/"ikinci-ana" → büyük marker.
 * Hover → popup (kampüs adı + ilçe + kademe sayısı).
 * Click → onCampusClick callback.
 * activeCampus prop değişince harita o marker'a pan + zoom.
 *
 * @example
 * <CampusMapbox
 *   campuses={campuses}
 *   onCampusClick={(slug) => router.push(`/kampusler/${slug}`)}
 * />
 */

"use client";

import { useEffect, useRef } from "react";
import { ContentNote } from "@/components/ui/content-note";
import { cn } from "@/lib/cn";
import styles from "./campus-mapbox.module.css";

export interface MapCampus {
  slug: string;
  name: string;
  ilce: string;
  il: string;
  badge?: "ana" | "ikinci-ana";
  kademeler: string[];
  koordinatlar: { lat: number; lng: number };
}

interface CampusMapboxProps {
  campuses: MapCampus[];
  activeCampus?: string;
  onCampusClick?: (slug: string) => void;
  className?: string;
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export function CampusMapbox({
  campuses,
  activeCampus,
  onCampusClick,
  className,
}: CampusMapboxProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);
  const markersRef = useRef<Record<string, unknown>>({});

  // biome-ignore lint/correctness/useExhaustiveDependencies: Mapbox init sadece mount'ta çalışır; campuses/onCampusClick değişince harita yeniden init edilmemeli
  useEffect(() => {
    if (!MAPBOX_TOKEN || !mapContainerRef.current) return;

    let mapboxgl: typeof import("mapbox-gl");
    let map: import("mapbox-gl").Map;

    async function initMap() {
      mapboxgl = (await import("mapbox-gl")).default as unknown as typeof import("mapbox-gl");
      await import("mapbox-gl/dist/mapbox-gl.css");

      map = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLElement,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [27.4, 38.35],
        zoom: 8,
        attributionControl: false,
        accessToken: MAPBOX_TOKEN as string,
      });

      map.addControl(new mapboxgl.AttributionControl({ compact: true }), "bottom-right");

      mapRef.current = map;

      campuses.forEach((campus) => {
        const isFeatured = campus.badge === "ana" || campus.badge === "ikinci-ana";

        // Custom marker element
        const el = document.createElement("div");
        el.className = `${styles.marker} ${isFeatured ? styles.markerFeatured : ""}`;
        el.setAttribute("aria-label", campus.name);

        // Popup
        const popup = new mapboxgl.Popup({
          offset: 12,
          closeButton: false,
          closeOnClick: false,
          className: styles.popupWrap,
        }).setHTML(`
          <div class="${styles.popup}">
            <p class="${styles.popupName}">${campus.name}</p>
            <p class="${styles.popupMeta}">${campus.ilce} · ${campus.kademeler.length} kademe</p>
          </div>
        `);

        const marker = new mapboxgl.Marker({ element: el })
          .setLngLat([campus.koordinatlar.lng, campus.koordinatlar.lat])
          .addTo(map);

        el.addEventListener("mouseenter", () => {
          popup.setLngLat([campus.koordinatlar.lng, campus.koordinatlar.lat]).addTo(map);
        });
        el.addEventListener("mouseleave", () => {
          popup.remove();
        });
        el.addEventListener("click", () => {
          onCampusClick?.(campus.slug);
        });

        markersRef.current[campus.slug] = marker;
      });
    }

    initMap();

    return () => {
      map?.remove();
    };
    // campuses and onCampusClick are stable across renders; ignore eslint exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // activeCampus değişince pan + zoom
  useEffect(() => {
    if (!activeCampus || !mapRef.current) return;
    const target = campuses.find((c) => c.slug === activeCampus);
    if (!target) return;

    (mapRef.current as import("mapbox-gl").Map).flyTo({
      center: [target.koordinatlar.lng, target.koordinatlar.lat],
      zoom: 12,
      duration: 1200,
    });
  }, [activeCampus, campuses]);

  if (!MAPBOX_TOKEN) {
    return (
      <ContentNote
        type="data"
        variant="block"
        description="İnteraktif kampüs haritası — NEXT_PUBLIC_MAPBOX_TOKEN env var gereklidir."
        className={className}
      />
    );
  }

  return (
    <div className={cn(styles.container, className)}>
      <div ref={mapContainerRef} className={styles.map} />
    </div>
  );
}
