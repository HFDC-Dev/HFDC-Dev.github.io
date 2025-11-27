const Skills = () => {
    return (
        <section
            id="skills"
            className="relative w-full py-16 md:py-30 px-6 lg:px-24 flex flex-col items-center overflow-hidden"
        >
            {/* Titre */}
            <div className="text-center md:mb-35 mb-15">
                <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: '"Science Gothic", sans-serif' }}>
                    Mes <span className="text-emerald-400">Compétences</span>
                </h1>
            </div>

            {/* Blocs Front-end / Back-end */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                {/* Front-end */}
                <div className="relative bg-linear-to-br from-white-800 via-black to-gray-900 rounded-2xl p-8 flex flex-col items-center overflow-hidden">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
                        Front-<span className="text-white">end</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/html5/original.svg" alt="HTML5" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">HTML5</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/css3/original.svg" alt="CSS3" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">CSS3</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/react/original.svg" alt="React" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">React</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/javascript/original.svg" alt="Javascript" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">Javascript</h3>
                        </div>
                    </div>
                </div>

                {/* Back-end */}
                <div className="relative bg-linear-to-br from-gray-800 via-black to-white-900 rounded-2xl p-8 flex flex-col items-center  overflow-hidden">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-8 text-center">
                        Back-<span className="text-white">end</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/nodejs/original.svg" alt="Node.js" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">Node.js</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/express/original.svg?color=%23FFFFFF" alt="Express" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">Express</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://devicon-website.vercel.app/api/mongodb/plain-wordmark.svg" alt="MongoDB" className="w-16 h-16 mb-2 transform transition duration-300 hover:scale-110" />
                            <h3 className="text-white">MongoDB</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills
