import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ page, user, children }) {
    const { state } = useLocation()

    switch (page) {
        case "login":
            if (user() != null) {
                if (state?.previousPath) { return <Navigate to={state.previousPath} /> }
                else { return <Navigate to="/" replace /> }

            }
            break;

        case "signUp":
            if (user() != null) {
                if (state?.previousPath) { return <Navigate to={state.previousPath} /> }
                else { return <Navigate to="/" replace /> }

            }
            break;
        // default:
    }
    return children
}