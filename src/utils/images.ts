export const IMAGE_FALLBACK = '/images/placeholder.svg';

export const resolveImage = (src?: string) => {
  if (!src) return IMAGE_FALLBACK;
  if (src.startsWith('/') && !src.startsWith('//')) return src;
  return IMAGE_FALLBACK;
};
