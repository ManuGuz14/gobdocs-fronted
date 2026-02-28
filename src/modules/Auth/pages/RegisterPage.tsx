import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AuthLayout } from '../../../shared/layouts/AuthLayout';
import LoginGradientVector from '../../../assets/Login/LoginGradientVector.png';
import LoginGradientVector2 from '../../../assets/Login/LoginGradientVector2.png';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

export const RegisterPage = () => {
  return (
    // Pasamos title vacío para que no salga el texto grande afuera, ya que tu diseño lo tiene adentro
    <AuthLayout title=""
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
      {/* Encabezado de la Tarjeta (Flecha + Título) */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Botón de regreso (absoluto a la izquierda) */}
        <Link 
          to="/auth/login" 
          className="absolute left-0 p-2 text-gobdocs-primary hover:bg-blue-50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </Link>
        
        {/* Título Centrado */}
        <h2 className="text-2xl font-bold text-gobdocs-primary">
          Crea tu cuenta
        </h2>
      </div>

      {/* Formulario */}
      <form className="space-y-4 max-w-xl md:max-w-4xl">
        <Input 
          label="Nombres" 
          placeholder="Ej. Juan" 
        />
        
        <Input 
          label="Apellidos" 
          placeholder="Ej. Pérez" 
        />
        
        <Input 
          label="Cédula" 
          placeholder="001-0000000-0" 
        />
        
        <Input 
          label="Correo electrónico" 
          type="email" 
          placeholder="juan@ejemplo.com" 
        />
        
        <Input 
          label="Contraseña" 
          type="password" 
          placeholder="••••••••" 
        />

        {/* Espacio adicional antes del botón */}
        <div className="pt-4">
          <Button type="submit">
            Crear Cuenta
          </Button>
        </div>
      </form>

    </AuthLayout>
  );
};