export const getCurrentYear = () => new Date().getFullYear();

export const getCurrentMonth = () =>
  new Date().toLocaleString('en-US', { month: 'long' });
