import './Content.css';

export const Content = ({ name }) => {
    return (
        <div className="user-card">
            <strong>🌼 Nombre:</strong> {name}
        </div>
    );
};
