import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/layout';

import { store } from '@/store/store';

import HeadProvider from './head-provider/head-provider';
import ReduxToast from './redux-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReduxToast />
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
};
export default MainProvider;
