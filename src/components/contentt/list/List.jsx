import './List.css';
import { Content } from '../Content';

export const List = ({ users }) => {
    return (
        <div className="list">
            {users.map((user, index) => (
                
                <Content key={index} name={user} />

            ))}
        </div>
    );
};
