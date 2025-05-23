import './Form.css';
import { useState } from 'react';
import { Input } from './input/Input'
import { Button } from './buttonn/Button'

export const Form = ({ onAddUser }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAddUser(name);
        setName('');
    };

    return (
        <form className="formm" onSubmit={handleSubmit}>
            <h3>Agregar nueva usuarie 👩</h3>
            <Input label="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <Button type="submit" text="Agregar" />
        </form>
    );
};
