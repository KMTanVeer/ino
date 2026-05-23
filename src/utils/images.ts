export const IMAGE_FALLBACK = '/images/placeholder.svg';

export const resolveImage = (src?: string) => {
  if (!src) return IMAGE_FALLBACK;
  const trimmed = src.trim();
  if (!trimmed) return IMAGE_FALLBACK;
  if (trimmed.startsWith('//')) return IMAGE_FALLBACK;
  if (trimmed.startsWith('/')) return trimmed;
  if (/^https:\/\//i.test(trimmed)) return trimmed;
  if (/^(data|blob):/i.test(trimmed)) return trimmed;
  return IMAGE_FALLBACK;
};
