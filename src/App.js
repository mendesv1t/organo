import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import {useState} from 'react';
import Especie from './components/Especie';

function App() {

  const especies = [
    {
    nome: 'Cachorro',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Gato',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ave',
      corPrimaria: '#B2CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Roedor',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    { 
      nome: 'Peixe',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [pets, setPets] = useState([]);

  const adicionarPet = (pet) => {
    setPets([...pets, pet]);
  }

  return (
    <div className="App">
     <Banner/>
     <Form 
     especies = {especies.map(especie => especie.nome)}
     cadastrarPet= {model => adicionarPet(model)} 
      />
     {especies.map(
      especie => 
      <Especie 
        key={especie.nome}
        nome={especie.nome}
        corPrimaria={especie.corPrimaria}
        corSecundaria={especie.corSecundaria}
        petsList={pets.filter(pet => pet.especie === especie.nome)}
      />
     )}
     <Footer/>
    </div>
  );
}

export default App;
