import './style.css'
import Pet from '../Pet'

const Especie = (props) => {
    if (props.petsList.length !== 0) {
    return (
            <section className='especie' style={{backgroundColor: props.corSecundaria}}>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='pets'>
                {props.petsList.map(
                    pet => 
                    <Pet
                    key={pet.nome}
                    nome={pet.nome}
                    especie={pet.especie}
                    imagem={pet.imagem}
                    bio={pet.bio}
                    corDeFundo={props.corPrimaria}
                    />
                )}
                </div>
            </section>
    )
                }
}

export default Especie