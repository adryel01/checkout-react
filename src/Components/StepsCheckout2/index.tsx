import './style.css'

export function StepsCheckout2() {


    return (
        <ul className='StepsCheckoutList2'>
            <li className='CheckoutStep1-2'>
                <div className='ConnectStep1-2'></div>
                <div className='HolderIconCheckout1-2'>1</div>
                <div className='InfoCheckoutStep'>Informações pessoais</div>
            </li>
            <li className='CheckoutStep2-2'>
                <div className='ConnectStep2-2'></div>
                <div className='HolderIconCheckout2-2'>2</div>
                <div className='InfoCheckoutStep'>Entrega</div>
            </li>
            <li className='CheckoutStep3-2'>
                <div className='ConnectStep3-2'></div>
                <div className='HolderIconCheckout3-2'>3</div>
                <div className='InfoCheckoutStep'>Pagamento</div>
            </li>
        </ul>
    )
}