import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ForgotPasswordScreen, HistoryScreen, HomeScreen, LogginScreen, RecoveryPasswordScreen, RegisterScreen } from './Screens'
import ProtectedRoutes from './Componets/ProtectedRoutes'
import { ModalProvider } from './Context/ModalContext'
import Navbar from './Componets/Navbar'
import Modal from './Componets/Modal'
import CreateTransaction from './Componets/CreateTransaction'
import ProtectedLayout from './Componets/ProtectedLayout'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LogginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
            <Route path='/auth/recovery-password/:reset-token' element={<RecoveryPasswordScreen />} />
            <Route element={<ProtectedRoutes />}>
                <Route element={<ProtectedLayout />} >
                    <Route path='/home' element={<HomeScreen />} />
                    <Route path='/history' element={<HistoryScreen />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App