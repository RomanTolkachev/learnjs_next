import { Modal } from '@/shared/ui/modal';
import { Preloader } from '@/shared/ui/preloader';
import { LoginPage } from '@/views/login';
import React, { FC, Suspense } from 'react';

const Page: FC = async () => {
    return (
        <Modal>
            <LoginPage />
        </Modal>
    );
};

export default Page;
