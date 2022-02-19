import React from 'react'
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (

        //<BrowserRouter>
        
        <HashRouter>
            <Routes>

                <Route path="/login" element={<LoginScreen />} />
                <Route path='/*' element={ <DashboardRoutes /> }  />

            </Routes>

        </HashRouter>

            

        //</BrowserRouter>
        
    );
}


