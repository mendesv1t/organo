import './style.css'
import Pet from '../Pet'

const Especie = (props) => {
    return (
        <section className='especie' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='pets'>
            {props.pets.map(
                pet => 
                <Pet
                nome={pet.nome}
                especie={props.nome}
                imagem={props.imagem}
                />
            )}
            </div>
        </section>
    )
}

export default Especie