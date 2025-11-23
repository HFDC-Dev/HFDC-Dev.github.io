const Navbar = () => {
    return (

        <div className="drawer drawer-end">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

            {/* Navbar */}
            <div className="drawer-content flex justify-center items-center p-10 text-white relative">

                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <button className="btn btn-ghost btn-circle text-white 
                     transition-transform duration-300 
                     hover:-translate-y-1 hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6"
                            />
                        </svg>
                    </button>
                </div>

                {/* Hamburger à droite, rapproché */}
                <div className="absolute right-1/4">
                    <label htmlFor="my-drawer-5" className="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                </div>
            </div>

            {/* Drawer Side */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
                <ul className="menu p-8 w-96 bg-base-200 min-h-screen text-xl gap-6">
                    <li><a href="#about" className="font-semibold hover:text-emerald-600">À propos</a></li>
                    <li><a href="#skills" className="font-semibold hover:text-emerald-600">Compétences</a></li>
                    <li><a href="#projects" className="font-semibold hover:text-emerald-600">Projets</a></li>
                    <li><a href="#contact" className="font-semibold hover:text-emerald-600">Contact</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
