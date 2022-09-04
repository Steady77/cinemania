import Header from '@/components/ui/header/header';

import Meta from '@/utils/meta/meta';

const Error404 = () => {
  return (
    <Meta title="Страница не найдена">
      <Header title="500 - Ошибка сервера" />
    </Meta>
  );
};
export default Error404;
