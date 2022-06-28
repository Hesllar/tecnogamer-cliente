import {Header} from '../navbar/Header';
import {Outlet} from 'react-router-dom';
// import Footer from '../Navbar/Footer';

export const Layout = ()  =>{

  return (
    <div>
      <Header/>
      <section>
        <Outlet/>
      </section>
      {/* <Footer/> */}

    </div>
  );
}


