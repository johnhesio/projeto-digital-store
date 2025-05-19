import Logo_header from "../assets/logo-header.svg";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-pink-700 font-bold text-xl">
            <img src={Logo_header} alt="Logo Digital Store" />
          </div>

          {/* Search (desktop only) */}
          <div className="hidden md:flex flex-1 mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full pl-4 pr-10 py-2 rounded bg-gray-100 focus:outline-none"
              />
              <i className="pi pi-search absolute right-3 top-2.5 text-gray-400 text-lg" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:underline text-gray-700">
              Cadastre-se
            </a>

            <div className="flex items-center space-x-8">
              <button className="bg-[#C92071] hover:bg-[#991956] text-white px-8 py-2 rounded ease-in">
                Entrar
              </button>
              <i
                className="pi pi-shopping-cart text-xl"
                style={{ color: "#C92071" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto sm:px-2 lg:px-4 py-4 flex justify-between">
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6 px-4 pb-2 text-sm text-[#474747]">
            <a
              href="#"
              className="hover:text-[#C92071] hover:border-b-2 hover:border-[#C92071] pb-1"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-[#C92071] hover:border-b-2 hover:border-[#C92071]  pb-1"
            >
              Produtos
            </a>
            <a
              href="#"
              className="hover:text-[#C92071] hover:border-b-2 hover:border-[#C92071]  pb-1"
            >
              Categorias
            </a>
            <a
              href="#"
              className="hover:text-[#C92071] hover:border-b-2 hover:border-[#C92071]  pb-1"
            >
              Meus Pedidos
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
