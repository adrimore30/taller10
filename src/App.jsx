import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';
import { Input } from './components/form/input/Input';
import { Button } from './components/form/buttonn/Button';
import { Content } from './components/contentt/Content';
import { Section} from './components/section/Sectionn';
import { List } from './components/contentt/list/List';


function App() {
  return (
    <>

      
      {/* 🟣 Encabezado principal */}
      <Header />

      <main style={{ padding: '20px' }}>
      <Section/>
        {/* 💬 Formulario con inputs y botón */}
        <Form/>
        
        {/* 📋 Lista de usuarios */}
         <h3>Lista de usuarias🦋</h3>
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
