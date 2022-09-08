import { IUserCred } from '@/store/auth/auth.interface';

export const getFromLS = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name);
    return ls ? JSON.parse(ls) : null;
  }

  return null;
};

export const saveToLS = (name: string, data: IUserCred) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const removeFromLS = (name: string) => {
  localStorage.removeItem(name);
};
