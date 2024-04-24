import './style.css'

const Pet = (props) => {
    return (
        <div className='pet'>
            <div className='cabecalho'>
                <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS' alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.especie}</h5>
            </div>
        </div>
    )
}

export default Pet