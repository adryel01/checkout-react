import './style.css'

export function ResumeCheckout(){


    return(
        <div className="ContainerResume">
            <div className="ResumeCheckout">
                <h3>RESUMO</h3>
                <div className="ProductResume">
                    <div className="ContainerImageProduct">
                        <img src="https://gmedia.playstation.com/is/image/SIEPDC/Controller-XL@2x?fmt=png-alpha&scl=1" alt="product" />
                    </div>
                    <div className="ContainerInfoProduct">
                        <p>Nome do produto</p>
                        <h4>Variante do produto</h4>
                        <div className="ValueAndQuantity">
                            <p>Qtd.:1</p>
                            <p>R$ 99,00</p>
                        </div>
                    </div>
                </div>
                <div className="TotalResume">
                    <div className="TotalResume1">
                        <span>Produtos</span>
                        <p>R$ 99,00</p>
                    </div>
                    <div className="TotalResume2">
                        <span>Total</span>
                        <h2>R$ 99,00</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}