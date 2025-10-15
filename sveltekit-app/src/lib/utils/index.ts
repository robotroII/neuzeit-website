export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

export function getLocaleFromPath(pathname: string, locales: string[], baseLocale: string) {
  const pathSegments = pathname.split('/').filter(Boolean);
  const possibleLocale = pathSegments[0];
  return (locales.includes(possibleLocale as any) ? possibleLocale : baseLocale) as typeof baseLocale;
}
