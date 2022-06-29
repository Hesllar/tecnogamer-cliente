import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layouts/layaout';
import { HomePage } from '../page/HomePage';
import { Products } from '../page/Products';
import {MouseTeclado} from '../page/categoria/MouseTeclado';
import {Gabinete} from '../page/categoria/Gabinete';
import {Memoria} from '../page/categoria/Memoria';
import { routes }  from './config-route';
import  NotFoundPages  from '../page/errores/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path={routes.home} element={<Layout />}>
            <Route  index element={<HomePage />}/>
            <Route  path={routes.products} element={<Products />}/>
            <Route  path={routes.mouseTeclado} element={<MouseTeclado />}/>
            <Route  path={routes.gabinete} element={< Gabinete/>}/>
            <Route  path={routes.memoria} element={<Memoria />}/>
        </Route>
          {/* Ventana de errores  */}
        <Route exact path="*" element={<NotFoundPages/>}/>
    </Routes>
  )
}
