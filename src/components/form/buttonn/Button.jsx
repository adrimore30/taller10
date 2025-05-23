import './Button.css';

export const Button = ({ type = "button", text }) => {
    return (
        <button type={type} className="btn">
            {text}
        </button>
    );
};
