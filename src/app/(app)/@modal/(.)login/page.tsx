import { Modal } from '@/shared/ui/modal';
import { LoginPage } from '@/views/login';
import React, { FC } from 'react';

const Page: FC = async () => {
    return (
        <Modal>
            <LoginPage />
        </Modal>
    );
};

export default Page;
