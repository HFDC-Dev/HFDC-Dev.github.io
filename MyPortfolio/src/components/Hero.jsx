const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-10rem)]">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16 items-center">

                {/* Texte Hero */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white-900 mb-4">
                        Je suis <span className="text-emerald-900">Henrique Fonseca Da Costa</span>
                    </h1>

                    <p className="py-10 max-w-md mx-auto lg:mx-0">
                        Développeur Front-End passionné par la création d’interfaces modernes, performantes et accessibles.
                        Je transforme des idées en expériences web engageantes.
                    </p>

                    {/* Bouton en-dessous du texte */}
                    <button className="btn mb-6 bg-emerald-900 hover:bg-emerald-600 text-white">
                        Contactez-moi
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Hero
