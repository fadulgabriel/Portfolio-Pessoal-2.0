import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import './Background.css';

const Background = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // O useMemo garante que as posições sejam calculadas apenas UMA VEZ quando o site abre
    const particles = useMemo(() => {
        const symbols = ['∑', '∫', 'π', '∞', 'μ', 'σ', 'λ', 'θ', '∂', '∇'];
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100, // Começa dentro da tela (0 a 100%)
            scale: Math.random() * 0.6 + 0.4,
            duration: Math.random() * 40 + 20, // Bem lento
            symbol: symbols[Math.floor(Math.random() * symbols.length)]
        }));
    }, []); 

    return (
        <div className="math-background">
            <div className="math-grid"></div>

            <div className="particles-layer">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="math-particle"
                        style={{
                            position: 'absolute', // Garante que o left e top funcionem perfeitamente
                            left: `${particle.x}%`,
                            top: `${particle.y}%`, // Posição inicial já na sua visão
                            scale: particle.scale,
                            willChange: 'transform, opacity' 
                        }}
                        animate={{
                            y: ['0vh', '150vh'], // Eles descem 150vh a partir de onde nasceram
                            opacity: [0.1, 0.4, 0.4, 0.1], // Sempre levemente visíveis
                            rotate: [0, 360] 
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {particle.symbol}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Background;