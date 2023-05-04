import { FormPayment } from "../../../Components/FormPayment";
import { ResumeCheckout2 } from "../../../Components/ResumeCheckout2";
import { StepsCheckout3 } from "../../../Components/StepsCheckout3";
import './style.css'


export function PagePayment() {
    return (
        <div className="PagePaymentContainer">
            <StepsCheckout3 />
            <ResumeCheckout2 />
            <FormPayment/>
        </div>
        
    )
}