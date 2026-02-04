import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      {/* Logo o Nombre de la App */}
      <div className="text-xl font-bold text-gray-800">
        <Link href="/">Zarodev Next</Link>
      </div>

      {/* Enlaces de navegación */}
      <div className="flex gap-4">
        <Link 
          href="/" 
          className="text-gray-600 hover:text-black transition-colors"
        >
          Home
        </Link>
        
        {/* Enlaces a rutas que crearemos luego */}
        <Link 
          href="/about" 
          className="text-gray-600 hover:text-black transition-colors"
        >
          About
        </Link>
        
        <Link 
          href="/dashboard" 
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};