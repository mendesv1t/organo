import './style.css'

const Button = (props) => {
    return (
        <button className="buttonComponent">
            {props.children}
        </button>
    )
}
export default Button