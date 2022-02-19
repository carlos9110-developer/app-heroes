import React from 'react'
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { LoginScreen } from '../components/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (

        //
        //<BrowserRouter>
        <HashRouter>
        
            <Routes>

                <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    } 
                />
                
                <Route path='/*' element={

                        <PrivateRoute>
                            <DashboardRoutes /> 
                        </PrivateRoute>

                    }  
                />

            </Routes>

        

            
        </HashRouter>
        //</BrowserRouter>
        
    );
}


