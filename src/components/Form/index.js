import DropDown from '../DropDown'
import TextField from '../TextField'
import Button from '../Button'

import './style.css'
const Form = () => {
    const especies = [
        'Cachorro',
        'Gato',
        'Ave',
        'Roedor',
        'Peixe'
    ]
    return (
        <section className="formComponent">
            <form>
            <h2>Preencha os dados para criar um card de um pet</h2>
            <TextField label="Nome" placeholder="Digite o nome do Pet"/>
            <TextField label="Imagem" placeholder="Digite o endereço da Imagem"/>
            <TextField label="Bio" placeholder="Digite alguma característica única"/>
            <DropDown items={especies} label="Espécie"/>
            <Button>
                Criar Card
            </Button>
            </form>
        </section>
    )
}

export default Form