// GCLID-i URL sonuna əlavə edir (separator olmadan - taskda istenilir deyə)
export function appendGCLID(baseUrl: string, gclid: string | null): string {
  if (!gclid) return baseUrl;
  
  try {
    const url = new URL(baseUrl);
    url.pathname = url.pathname + gclid;
    return url.toString();
  } catch {
    return baseUrl + gclid;
  }
}
