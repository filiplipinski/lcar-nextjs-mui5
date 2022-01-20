export const buildUrl = (url?: string) => {
  if (!url) {
    return '';
  }

  return `https:${url}`;
};
