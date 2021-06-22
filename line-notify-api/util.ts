const base = "https://notify-api.line.me/";

export function getUrl(url: string) {
  return new URL(url, base);
}
