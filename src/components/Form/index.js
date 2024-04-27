import DropDown from '../DropDown'
import TextField from '../TextField'
import Button from '../Button'
import {useState} from 'react'

import './style.css'
import InputFile from '../InputFile'
const Form = (props) => {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [bio, setBio] = useState('');
    const [especie, setEspecie] = useState(props.especies[0]);
        
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImagem(URL.createObjectURL(event.target.files[0]));
        }
    }

    const salvar = (event) => {
        event.preventDefault()
        props.cadastrarPet({
            nome,
            imagem,
            bio,
            especie
        })
        setNome('');
        // espécie default
        setEspecie('');
        setImagem(null);
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
            <InputFile
            label="Imagem"
            required={true}
            onChange={onImageChange}
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