import React, { Suspense, useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

const Index = () => {
    const Movies = React.lazy(() => import('./Movies'));
    return (
        <React.Suspense>
        <Routes>
            <Route index element={<Movies />} />
            <Route path={`/movies`} element={<Movies />} />
           
            <Route
                path="*"
                element={<Navigate to="/movies" />}
            />
          
        </Routes>
      </React.Suspense>
    );
}

export default Index;