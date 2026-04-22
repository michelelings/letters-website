export const SITE_URL = "https://www.letters.game";
export const SITE_NAME = "Letters";
export const APP_DOWNLOAD_URL = "https://testflight.apple.com/join/3jNtcz3K";
export const OCHO_URL = "https://www.ocho.so";
export const GA_MEASUREMENT_ID = "G-CYNDT2QSQX";

export type Locale = "en" | "es" | "nl" | "de";

/** Absolute URL helper that strips a trailing slash everywhere except root. */
export function absUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
