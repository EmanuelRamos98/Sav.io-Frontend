import React from 'react'
import '../src/Styles/global.css'
import { Route, Routes } from 'react-router-dom'
import { ForgotPasswordScreen, HistoryScreen, HomeScreen, LogginScreen, RecoveryPasswordScreen, RegisterScreen } from './Screens'
import { ProtectedLayout, ProtectedRoutes } from './Componets'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<LogginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/forgot-password' element={<ForgotPasswordScreen />} />
            <Route path='/recovery-password/:token_recuperation' element={<RecoveryPasswordScreen />} />
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