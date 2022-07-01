import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layouts/layaout';
import { HomePage } from '../page/HomePage';
import { Products } from '../page/Products';
import {MouseTeclado} from '../page/categoria/MouseTeclado';
import {Gabinete} from '../page/categoria/Gabinete';
import {Memoria} from '../page/categoria/Memoria';
import { routes }  from './config-route';
import { LoginPage }  from '../page/user/LoginPage';
import { RegisterPage }  from '../page/user/RegisterPage';
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
            <Route  path={routes.login} element={<LoginPage />}/>
            <Route  path={routes.register} element={<RegisterPage />}/>
        </Route>
          {/* Ventana de errores  */}
        <Route exact path="*" element={<NotFoundPages/>}/>
    </Routes>
  )
}
