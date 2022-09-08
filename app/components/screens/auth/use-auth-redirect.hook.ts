import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/use-auth.hook';

export const useAuthRedirect = () => {
  const { authData } = useAuth();

  const { query, push } = useRouter();

  const redirect = query.redirect ? String(query.redirect) : '/';

  useEffect(() => {
    if (authData) push(redirect);
  }, [authData, redirect, push]);
};
