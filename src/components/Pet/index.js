import './style.css'

const Pet = ({nome, imagem, especie, bio}) => {
    return (
        <div className='pet'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{especie}</h5>
                <h5>{bio}</h5>
            </div>
        </div>
    )
}

export default Pet