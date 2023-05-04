import './style.css'

export function StepsCheckout() {


    return (
        <ul className='StepsCheckoutList'>
            <li className='CheckoutStep1'>
                <div className='ConnectStep1'></div>
                <div className='HolderIconCheckout1'>1</div>
                <div className='InfoCheckoutStep'>Informações pessoais</div>
            </li>
            <li className='CheckoutStep2'>
                <div className='ConnectStep2'></div>
                <div className='HolderIconCheckout2'>2</div>
                <div className='InfoCheckoutStep'>Entrega</div>
            </li>
            <li className='CheckoutStep3'>
                <div className='ConnectStep3'></div>
                <div className='HolderIconCheckout3'>3</div>
                <div className='InfoCheckoutStep'>Pagamento</div>
            </li>
        </ul>
    )
}