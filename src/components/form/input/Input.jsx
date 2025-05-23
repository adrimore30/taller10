import './Input.css';

export const Input = ({ label, value, onChange }) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};