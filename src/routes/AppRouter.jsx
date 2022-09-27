import { Routes, Route } from 'react-router-dom';
// import { Layout } from '../components/layouts/layaout';
import { HomePage } from '../page/HomePage';
import { Products } from '../page/product/Products';
import { MouseTeclado } from '../page/categoria/MouseTeclado';
import { Gabinete } from '../page/categoria/Gabinete';
import { Memoria } from '../page/categoria/Memoria';
import { routes } from './config-route';
import { LoginPage } from '../page/user/LoginPage';
import { RegisterPage } from '../page/user/RegisterPage';
import NotFoundPages from '../page/errores/NotFoundPage';
import { ViewProduct } from '../page/product/ViewProduct';
import { CrearProducto } from '../page/administrador/product/CrearProducto';
import { CrearCategoria } from '../page/administrador/category/CrearCategoria';
import { CrearMarca } from '../page/administrador/mark/CrearMarca';
import { UserProvider } from '../context/UserProvider';
import { Header } from '../components/navbar/Header';
import { Footer } from '../components/navbar/Footer';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/*' element={
          <PublicRoute>

            <Routes>

              <Route path={routes.home} element={<HomePage />} />

              {/* Rutas Producto */}
              <Route path={routes.products} element={<Products />} />

              <Route path={`${routes.viewProduct}/:id`} element={<ViewProduct />} />

              {/* Rutas Categoría */}
              <Route path={routes.mouseTeclado} element={<MouseTeclado />} />
              <Route path={routes.gabinete} element={< Gabinete />} />
              <Route path={routes.memoria} element={<Memoria />} />

              {/* Rutas usuario */}
              <Route path={routes.login} element={<LoginPage />} />
              <Route path={routes.register} element={<RegisterPage />} />

              {/* Ventana de errores  */}
              <Route exact path="/*" element={<NotFoundPages />} />

            </Routes>
          </PublicRoute>
        } />

        <Route path='admin/*' element={
          <PrivateRoute>
            <Routes>

              {/* Productos */}
              <Route path={routes.addProduct} element={<CrearProducto />} />

              {/* Categoria */}
              <Route path={routes.addCategory} element={<CrearCategoria />} />

              {/* Rutas Marca */}
              <Route path={routes.addMark} element={<CrearMarca />} />

            </Routes>
          </PrivateRoute>
        } />

      </Routes>
      <Footer />
    </UserProvider>
  )
}
