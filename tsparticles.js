tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 50, // Número de partículas
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"], // Cores aleatórias
        },
        shape: {
            type: "star" // Forma das partículas
        },
        opacity: {
            value: 0.9,
            random: true
        },
        size: {
            value: 6,
            random: true
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse" 
            }
        },
        modes: {
            repulse: {
                particles: {
                    color: {
                        value: "#00ff00" 
                    }
                }
            }
        }
    
    
    },
    retina_detect: true
});