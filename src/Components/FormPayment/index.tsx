import './style.css'
import { useNavigate } from "react-router-dom"
import {FiLock} from 'react-icons/fi'

export function FormPayment() {
    const navigate = useNavigate()

    function onSubmitButton(){
        navigate('/checkout/payload')
    }

    return (
        <div className='BoxData'>
            <div className='BoxTitle'>
                <div className='BoxSubtitle'>
                    <div className='HolderNumber'>3</div>
                    <h2>Pagamento</h2>
                </div>
                <p>Finalizar pagamento</p>
            </div>
            <form className="FormPayment" onSubmit={()=>onSubmitButton()}>
                <button className='ContinueButton'><FiLock/> Comprar agora</button>
            </form>
        </div>

    )
}