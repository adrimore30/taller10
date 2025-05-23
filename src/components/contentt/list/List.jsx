import './List.css';
import { Content } from '../Content';

export const List = ({ users }) => {
    return (
        <div className="list">
            <h3>Lista de usuarias 💖</h3>
            {users.map((user, index) => (
                <Content key={index} name={user} />
            ))}
        </div>
    );
};
