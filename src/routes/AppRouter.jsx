import {Routes, Route} from 'react-router-dom';
import { Layout } from '../components/layouts/layaout';
import { HomePage } from '../page/HomePage';
import { Products } from '../page/Products';
import {routes}  from './config-route';


export const AppRouter = () => {
  return (
    <Routes>
        <Route path={routes.home} element={<Layout />}>
            <Route  index element={<HomePage />}/>
            <Route  path={routes.products} element={<Products />}/>
        </Route>
    </Routes>
  )
}
