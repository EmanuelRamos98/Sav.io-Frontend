import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { ModalProvider } from '../Context/ModalContext';
import Modal from './Modal';

const ProtectedLayout = () => {
    return (
        <>
            <ModalProvider>
                <Navbar />
                <Outlet />
                <Modal />
            </ModalProvider>
        </>
    );
};

export default ProtectedLayout;
