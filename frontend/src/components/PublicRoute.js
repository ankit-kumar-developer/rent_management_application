// src/components/PublicRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    return token ? <Navigate to="/admin_dashboard" /> : children;
};

export default PublicRoute;
