import Space from '../assets/space.mp4'

const Background = ({ children }) => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Vidéo en fond POUR LES SECTIONS APRÈS LE HERO */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-1"
            >
                <source src={Space} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-2" />

            {/* Contenu au-dessus */}
            <div className="relative z-3">
                {children}
            </div>
        </div>
    )
}

export default Background
