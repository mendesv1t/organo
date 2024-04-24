import DropDown from '../DropDown'
import TextField from '../TextField'
import Button from '../Button'
import {useState} from 'react'

import './style.css'
const Form = (props) => {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [bio, setBio] = useState('');
    const [especie, setEspecie] = useState('');


    const salvar = (event) => {
            event.preventDefault()
            console.log(nome, imagem, bio, especie);
        props.cadastrarPet({
            nome,
            imagem,
            bio,
            especie
        })
        setNome('');
        setImagem('');
        setEspecie('');
        setBio('');
    }

    return (
        <section className="formComponent">
            <form onSubmit={salvar}>
            <h2>Preencha os dados para criar um card de um pet</h2>
            <TextField 
                required={true}                
                label="Nome"
                placeholder="Digite o nome do Pet"
                valor={nome}
                valorAlterado={valor => setNome(valor)}
            />
            <TextField 
                required={true} 
                label="Imagem" 
                placeholder="Digite o endereço da Imagem"
                valor={imagem}
                valorAlterado={valor => setImagem(valor)}
            />
            <TextField 
                required={false}
                label="Bio" 
                placeholder="Digite alguma característica única"
                valor={bio}
                valorAlterado={valor => setBio(valor)}
            />
            <DropDown 
                required={true} 
                items={props.especies} 
                label="Espécie"
                valor={especie}
                valorAlterado={valor => setEspecie(valor)}
            />
            <Button>
                Criar Card
            </Button>
            </form>
        </section>
    )
}

export default Form