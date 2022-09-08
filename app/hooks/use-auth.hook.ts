import { useTypedSelector } from './use-typed-selector.hook';

export const useAuth = () => useTypedSelector((state) => state.auth);
