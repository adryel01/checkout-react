import './style.css'

export function StepsCheckout3() {


    return (
        <ul className='StepsCheckoutList3'>
            <li className='CheckoutStep1-3'>
                <div className='ConnectStep1-3'></div>
                <div className='HolderIconCheckout1-3'>1</div>
                <div className='InfoCheckoutStep'>Informações pessoais</div>
            </li>
            <li className='CheckoutStep2-3'>
                <div className='ConnectStep2-3'></div>
                <div className='HolderIconCheckout2-3'>2</div>
                <div className='InfoCheckoutStep'>Entrega</div>
            </li>
            <li className='CheckoutStep3-3'>
                <div className='ConnectStep3-3'></div>
                <div className='HolderIconCheckout3-3'>3</div>
                <div className='InfoCheckoutStep'>Pagamento</div>
            </li>
        </ul>
    )
}