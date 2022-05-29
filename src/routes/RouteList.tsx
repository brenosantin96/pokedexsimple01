import { useRoutes } from 'react-router-dom'
import { MainPage } from '../pages/MainPage';
import { PokeInfoPage } from '../pages/PokeInfoPage';


export const RouteList = () => {

    return useRoutes([
        {path: '/', element: <MainPage />},
        { path: '/pokemon/:id', element: <PokeInfoPage /> },
    ]);

}