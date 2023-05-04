import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { iData } from "../../interfaces/interfaces"
import { FormInput } from "../FormInput"
import InputMask from 'react-input-mask'
import './style.css'
import { useNavigate } from "react-router-dom"

export function FormData() {
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('Email obrigatório').email('Email inválido'),
        cpf: yup.number().required('CPF obrigatório')
    })

    const { register, handleSubmit,formState: { errors }, } = useForm<iData>({
        resolver: yupResolver(formSchema),
    })

    const onSubmitFunctionData: SubmitHandler<iData> = data => {
        const { name, email, cpf } = data
        const registerData = {
            name: name,
            email: email,
            cpf: cpf
        }
        localStorage.setItem('registerData', registerData.cpf.toString())
    }

    // if (validate(localStorage.getItem('registerData')!) == false) {
    //     toast.error('CPF inválido')
    // }

    function onSubmitButton(){
        handleSubmit(onSubmitFunctionData)
        navigate('/checkout/address')
    }

    return (
        <div className='BoxData'>
            <div className='BoxTitle'>
                <div className='BoxSubtitle'>
                    <div className='HolderNumber'>1</div>
                    <h2>Identifique-se</h2>
                </div>
                <p>Utilizaremos seu e-mail para: Identificar seu perfil, histórico de compra, notificação de pedidos e carrinho de compras.</p>
            </div>
            <form className="FormData" onSubmit={()=>onSubmitButton()}>
                <FormInput label="Nome completo" register={register('name')} error={errors.name} type='text' id='name' placeholder='Digite seu nome' />
                <FormInput label="E-mail" register={register('email')} error={errors.email} type='text' id='email' placeholder='Digite seu e-mail' />
                <label htmlFor="cpf" title='cpf'>CPF</label>
                <InputMask mask='999.999.999-99' placeholder='000.000.000-00' className='MaskCPF' required/>
                <label htmlFor="celular" title='celular'>Celular/Whatsapp</label>
                <InputMask mask='(99) 99999-9999' placeholder='(00) 00000-0000' className='MaskPhone' required/>
                <button className='ContinueButton'>Continuar</button>
            </form>
        </div>

    )
}