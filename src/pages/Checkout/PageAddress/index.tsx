import { FormAddress } from "../../../Components/FormAddress";
import { ResumeCheckout } from "../../../Components/ResumeCheckout";
import { StepsCheckout2 } from "../../../Components/StepsCheckout2";
import './style.css'


export function PageAddress() {
    return (
        <div className="PageAddressContainer">
            <StepsCheckout2 />
            <ResumeCheckout />
            <FormAddress/>
        </div>
        
    )
}