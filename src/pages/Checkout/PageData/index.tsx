import { FormData } from "../../../Components/FormData";
import { ResumeCheckout } from "../../../Components/ResumeCheckout";
import { StepsCheckout } from "../../../Components/StepsCheckout";
import './style.css'


export function PageData() {
    return (
        <div className="PageDataContainer">
            <StepsCheckout />
            <ResumeCheckout />
            <FormData />
        </div>
        
    )
}