import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Link } from "react-router";

const NotFound404 = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Abstract furniture shapes */}
                <svg
                    className="absolute top-20 right-10 w-64 h-64 opacity-[0.07] animate-float"
                    viewBox="0 0 200 200"
                    fill="none"
                >
                    <rect x="40" y="80" width="120" height="80" rx="2" className="fill-foreground" />
                    <rect x="50" y="160" width="10" height="30" rx="1" className="fill-foreground" />
                    <rect x="140" y="160" width="10" height="30" rx="1" className="fill-foreground" />
                    <rect x="60" y="90" width="80" height="10" rx="1" className="fill-foreground" />
                </svg>

                <svg
                    className="absolute bottom-32 left-10 w-48 h-48 opacity-[0.05] animate-float-delayed"
                    viewBox="0 0 200 200"
                    fill="none"
                >
                    <circle cx="100" cy="140" r="50" className="fill-foreground" />
                    <rect x="85" y="60" width="30" height="80" rx="15" className="fill-foreground" />
                </svg>

                <svg
                    className="absolute top-1/3 left-1/4 w-32 h-32 opacity-[0.04] animate-float"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <rect x="10" y="30" width="80" height="50" rx="25" className="fill-foreground" />
                    <rect x="20" y="80" width="8" height="15" rx="1" className="fill-foreground" />
                    <rect x="72" y="80" width="8" height="15" rx="1" className="fill-foreground" />
                </svg>

                {/* Decorative lines */}
                <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="absolute bottom-0 left-1/3 w-px h-48 bg-gradient-to-t from-transparent via-border to-transparent" />
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
                {/* 404 Display */}
                <div className="relative mb-8">
                    <span className="font-display text-[12rem] sm:text-[16rem] md:text-[20rem] font-bold leading-none text-foreground/30 opacity-10 select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold text-foreground opacity-0 animate-fade-in-up">
                            404
                        </h1>
                    </div>
                </div>

                {/* Message */}
                <div className="text-center max-w-lg mb-12 space-y-4">
                    <h2 className="font-display text-2xl sm:text-3xl text-foreground opacity-0 animate-fade-in-up animation-delay-100">
                        Página no encontrada
                    </h2>
                    <p className="font-body text-gray-400 text-base sm:text-lg leading-relaxed opacity-0 animate-fade-in-up animation-delay-200">
                        Parece que este espacio aún no ha sido amueblado.
                        La página que buscas no existe o ha sido movida.
                    </p>
                </div>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-in animation-delay-300">
                    <div className="w-12 h-px border border-gray-300" />
                    <div className="w-2 h-2 rotate-45 border border-gray-400" />
                    <div className="w-12 h-px border border-gray-300" />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center opacity-0 animate-fade-in-up animation-delay-400">
                    <Button
                        asChild
                        variant="luxury"
                        size="lg"
                        className="group bg-primary-500 hover:bg-primary-600 text-white"
                    >
                        <Link to="/">
                            <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                            Volver al inicio
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="luxury-outline"
                        size="lg"
                        className="group"
                    >
                        <Link to="/">
                            <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
                            Explorar colección
                        </Link>
                    </Button>
                </div>

                {/* Back link */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-8 flex items-center gap-2 text-sm text-gray-400 hover:text-gray-400 transition-colors duration-300 opacity-0 animate-fade-in animation-delay-500 group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="font-body">Regresar a la página anterior</span>
                </button>

                {/* Bottom decorative element */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-xs text-gray-400 font-body tracking-widest uppercase">
                    <span>Muebles</span>
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <span>Diseño</span>
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                    <span>Elegancia</span>
                </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-gray-200 opacity-0 animate-fade-in animation-delay-300" />
            <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-gray-200 opacity-0 animate-fade-in animation-delay-300" />
            <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-gray-200 opacity-0 animate-fade-in animation-delay-300" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-gray-200 opacity-0 animate-fade-in animation-delay-300" />
        </div>
    );
};

export default NotFound404;
