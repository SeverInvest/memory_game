import "./Button.css"

export default function Button({ text, onClick, type }) {
    return (
        <button className="button" type={type} onClick={onClick}>{text}</button>
    )
}