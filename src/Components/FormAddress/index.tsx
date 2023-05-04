import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { FormInput } from "../FormInput"
import InputMask from 'react-input-mask'
import './style.css'
import { useNavigate } from "react-router-dom"

export function FormAddress() {
    const navigate = useNavigate()

    const formSchema = yup.object().shape({
        endereco: yup.string().required('Endereço obrigatório'),
        numero: yup.number().required('Número obrigatório'),
        bairro: yup.number().required('Bairro obrigatório')
    })

    const { register, formState: { errors }, } = useForm<any>({
        resolver: yupResolver(formSchema),
    })


    return (
        <div className='BoxData'>
            <div className='BoxTitle'>
                <div className='BoxSubtitle'>
                    <div className='HolderNumber'>2</div>
                    <h2>Entrega</h2>
                </div>
                <p>Selecione um endereço</p>
            </div>
            <form className="FormData" onSubmit={() => navigate('/checkout/payment')}>
                <FormInput label="Endereço" register={register('endereco')} error={errors.endereco} type='text' id='endereco' placeholder='Digite seu endereço' />
                <div className='NumberAddress'>
                    <FormInput label="Número" register={register('numero')} error={errors.numero} type='number' id='numero'/>
                    <FormInput label="Bairro" register={register} error={errors} type='text' id='bairro'/>
                </div>
                <label htmlFor="CEP" title='CEP'>CEP</label>
                <InputMask mask='99999-999' className='MaskCEP' required/>
                <label htmlFor="complemento" title='complemento'>Complemento <span>(opcional)</span></label>
                <input type="complemento" name='complemento' id='complemento'/>

                <label htmlFor="entrega">Forma de entrega:</label>
                <section className='SectionFrete'>
                    <div>
                        <h3>CORREIOS - Prazo de 2 a 4 semanas</h3>
                        <p>Entrega garantida</p>
                    </div>
                    <p>Grátis</p>
                </section>

                <button className='ContinueButton'>Continuar</button>
            </form>
        </div>

    )
}