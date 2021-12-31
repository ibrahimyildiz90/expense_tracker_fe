import React from 'react'
import { Navigate, Route, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
    component: React.FC<any>;
}

export default function PrivateRound({ component: Component, ...theRest }: PrivateRouteProps) {
    return <Route {...theRest}
      /*   render={(props) => {
            const token = localStorage.getItem("token");
            if (token) {
                return <Component {...props} />
            }

            return <Navigate to="/login" />
        }}  *//>



}
