import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';
import { Input } from './components/input/Input';
import { Button } from './components/button/Button';
import { Content } from './components/content/Content';
import { List } from './components/contentt/list/List';

function App() {
  return (
    <>
      {/* 🟣 Encabezado principal */}
      <Header />

      <main style={{ padding: '20px' }}>
        {/* 💗 Tarjeta de bienvenida o presentación */}
        <Content 
          title="Gestor de Usuarios" 
          content="Administra tus usuarias de forma sencilla y bonita 💖" 
        />

        {/* 💬 Formulario con inputs y botón */}
        <Form>
          <Input placeholder="Nombre del usuario" />
          <Input placeholder="Correo electrónico" />
          <Button texto="Agregar Usuaria 💅" />
        </Form>

        {/* 📋 Lista de usuarios */}
        <List 
          users={[
            "Adriana Moreno",
            "Lina Gómez",
            "Valeria López",
            "Mariana Ríos"
          ]}
        />
      </main>

      {/* 🦋 Pie de página */}
      <Footer />
    </>
  );
}

export default App;
