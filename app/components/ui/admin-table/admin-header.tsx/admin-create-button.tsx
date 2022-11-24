import { FC } from 'react';

import Button from '@/components/ui/form-elements/button';

const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Создать</Button>;
};

export default AdminCreateButton;
