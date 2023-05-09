import InputMask from 'react-input-mask'
import './style.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'


export function FormAddress() {
    const navigate = useNavigate()

    const [estado, setEstado] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')


    const checkCEP = (e: any) => {
        const cep = e.target.value
        console.log(cep)

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                setEndereco(data.logradouro)
                setBairro(data.bairro)
                setEstado(`${data.localidade}-${data.uf}`)
            })
        

    }


    return (
        <div className='BoxData'>
            <div className='BoxTitle'>
                <div className='BoxSubtitle'>
                    <div className='HolderNumber'>2</div>
                    <h2>Entrega</h2>
                </div>
                <p>Selecione o endereço</p>
            </div>
            <form className="FormData" onSubmit={() => navigate('/checkout/payment')}>
                <div className='ContainerCEP'>
                    <div className='DivCEP'>
                        <label htmlFor="CEP" title='CEP'>CEP</label>
                        <InputMask mask='99999-999' className='MaskCEP' required onBlur={checkCEP} />
                    </div>
                    <p>{estado}</p>
                </div>
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id='endereco' value={endereco} />
                <div className='Address'>
                    <div className='NumberAddress'>
                        <label htmlFor="numero">Número</label>
                        <input type="number" id='numero' required />
                    </div>
                    <div className='Neighbor'>
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" id='bairro' value={bairro} required />
                    </div>
                </div>
                <label htmlFor="complemento" title='complemento'>Complemento <span>(opcional)</span></label>
                <input type="complemento" name='complemento' id='complemento' />

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