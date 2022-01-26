export const truncate = (text: string, maxLength: number) => {
  if (!text) {
    return '';
  }

  const length = maxLength - 3; // 3 dots

  if (text.length < maxLength) {
    return text;
  }

  return text.substring(0, length) + '...';
};
