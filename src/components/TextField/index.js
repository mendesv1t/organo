import './style.css'

const TextField = (props) => {

    const valorDigitado = (event) => {
       props.valorAlterado(event.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={valorDigitado} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}
export default TextField