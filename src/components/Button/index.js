import './style.css'

const Button = (props) => {
    return (
        <button onClick={props.salvar} className="buttonComponent">
            {props.children}
        </button>
    )
}
export default Button