import React from 'react';
import AuthProvider from '../../Contexts/AuthProvider';

const AuthContextWraper = ({children}) => {
    return <AuthProvider>{children}</AuthProvider>
};

export default AuthContextWraper;