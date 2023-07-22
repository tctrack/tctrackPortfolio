import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Common from './Assets/js/Common';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Enquiries from './Component/Enquiries/Enquiries';
import ContactPage from './Component/Pages/ContactPage';
import Mynews from './Component/Mynews/Mynews';
import AboutPage from './Component/Pages/AboutPage';
import ServicePage from './Component/Pages/ServicePage';
import ResumePage from './Component/Pages/ResumePage';
import PortfolioPage from './Component/Pages/PortfolioPage';
import TeamPage from './Component/Pages/TeamPage';


function App() {

    
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/enquiries' element={<Enquiries />} />
                <Route exact path='/contact' element={<ContactPage />} />
                <Route exact path='/news' element={<Mynews />} />
                <Route exact path='/about' element={<AboutPage />} />
                <Route exact path='/service' element={<ServicePage />} />
                <Route exact path='/resume' element={<ResumePage />} />
                <Route exact path='/portfolio' element={<PortfolioPage />} />
                <Route exact path='/team' element={<TeamPage />} />
            </Routes>
            <Footer/>
            <Common/>
        </>
    );
}


export default App;
