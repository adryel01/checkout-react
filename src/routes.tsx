import { Routes, Route } from 'react-router-dom';
import { PageData } from './pages/Checkout/PageData';
import { PageAddress } from './pages/Checkout/PageAddress';
import { PagePayment } from './pages/Checkout/PagePayment';
import { Obrigado } from './pages/Obrigado';

const Router = ()=>{
    return (
        <Routes>
            <Route path='/' element={<PageData/>}/>
            <Route path='/checkout/address' element={<PageAddress/>}/>
            <Route path='/checkout/payment' element={<PagePayment/>}/>
            <Route path='/checkout/payload' element={<Obrigado/>}/>
        </Routes>
    )
}

export default Router;