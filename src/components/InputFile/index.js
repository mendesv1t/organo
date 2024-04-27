import './style.css'

const InputFile = (props) => {
    return (
            <div className="input-file">
            <label>{props.label}</label>
            <input type="file" className="filetype" id="group_image" onChange={props.onChange} required={props.required}/>
            </div>
    )
}
export default InputFile