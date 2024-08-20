import './App.css';
import ThemeToggleButton from './Components/Assets/ThemeToggleButton';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './page/Login';


function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          ¡Bienvenidos a Autobooks!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Nos llena de entusiasmo darte la bienvenida. Nos alegra enormemente que hayas decidido unirte a nosotros. Te invitamos a explorar nuestra cuidada selección de libros, diseñada para ofrecerte una experiencia única y enriquecedora. Disfruta de la inmersión en mundos fascinantes, descubre nuevas perspectivas y permite que cada página te lleve a un viaje inolvidable. Tu experiencia aquí es nuestra prioridad, así que si necesitas alguna recomendación o asistencia, no dudes en contactarnos. ¡Esperamos que encuentres en nuestra colección algo que te inspire y te apasione!
        </p>
        <div className="flex mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/login"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-yellow-400 dark:hover:bg-gray-700"
          >
            Iniciar sesión
          </Link>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-yellow-400 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-yellow-400 dark:hover:bg-gray-700"
          >
            Registrate
          </button>
        </div>
      </div>
    </Router>
    <ThemeToggleButton/></>
  );
}

export default App;

