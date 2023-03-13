import "./Button.css"

const Button = (props) => {
    return <button onClick={props.callback} className="btn-css bg-transparent text-white font-semibold hover:text-gray-200 py-2 px-4 mr-2 w-34">{props.label}</button>
}

export default Button