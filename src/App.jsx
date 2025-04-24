import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ForgotPasswordScreen, HistoryScreen, HomeScreen, LogginScreen, RecoveryPasswordScreen, RegisterScreen } from './Screens'
import ProtectedRoutes from './Componets/ProtectedRoutes'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LogginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
            <Route path='/auth/recovery-password/:reset-token' element={<RecoveryPasswordScreen />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/home' element={<HomeScreen />} />
                <Route path='/history' element={<HistoryScreen />} />
            </Route>

        </Routes>
    )
}

export default App