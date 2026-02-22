import { Link, useNavigate } from 'react-router-dom'; // <--- 1. Importar useNavigate
import { AuthLayout } from '../../../shared/layouts/AuthLayout';
import LoginGradientVector from '../../../assets/Login/LoginGradientVector.png';
import LoginGradientVector2 from '../../../assets/Login/LoginGradientVector2.png';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

export const LoginPage = () => {
  const navigate = useNavigate(); // <--- 2. Inicializar el hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de conexión con el Backend (Node.js)
    // Por ahora, simulamos que el login es exitoso y redirigimos:
    console.log("Login exitoso, redirigiendo...");
    navigate('/portal'); // <--- 3. Redirección a la Landing
  };

  return (
    <AuthLayout
      title="Bienvenido a GobDocs RD"
      decoration={
        <><img
          src={LoginGradientVector}
          alt="Login gradient"
          className="absolute left-[85%] -translate-x-1/2 top-[3rem] w-70 opacity-95 pointer-events-none -z-10" /><img
            src={LoginGradientVector2}
            alt="Login gradient 2"
            className="absolute left-[20%] -translate-x-1/2 top-[20rem] w-70 opacity-95 pointer-events-none -z-10" /></>
      }

    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gobdocs-primary">Inicio de sesión</h2>
        <p className="text-gray-500 text-sm mt-1">
          Bienvenido a GobDocs RD, tus documentos a un clic
        </p>
      </div>

      {/* 4. Agregamos el onSubmit al formulario */}
      <form onSubmit={handleSubmit}>
        <Input 
          label="Usuario" 
          placeholder="" 
          type="text"
        />
        
        <Input 
          label="Contraseña" 
          placeholder="" 
          type="password"
        />

        <div className="flex justify-start mb-6">
          <a href="#" className="text-xs text-gray-500 hover:text-gobdocs-primary underline">
            He olvidado mi contraseña
          </a>
        </div>

        <Button type="submit">
          Iniciar Sesión
        </Button>

        <div className="mt-6 text-center">
            <Link to="/auth/register" className="text-sm text-gray-500 hover:text-gobdocs-primary underline">
                Crea una cuenta nueva aquí
            </Link>
        </div>
      </form>
    </AuthLayout>
  );
};