import './Form.css';
import { useState } from 'react';
import { Input } from './input/Input';
import { Button } from './buttonn/Button';
import { List } from '../contentt/list/List';

export const Form = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        setUsers([...users, name]);
        setName('');
    };

    return (
        <div>
            <form className="formm" onSubmit={handleSubmit}>
                <h3>Agregar nueva usuarie 👩</h3>
                <Input 
                    label="Nombre" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <Button type="submit" text="Agregar💖" />
            </form>

            {/* Lista de usuaries después del formulario */}
            <h3>Nuevas usuarias💖</h3>
            <List users={users} />
        </div>
    );
};
