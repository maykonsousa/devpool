export const formatName = (name: string) => {
  if (!name) return '';
  const formatedName = name.trim().replace(/[^a-zA-Z ]/g, '');
  return formatedName;
};
