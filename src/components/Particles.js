import React from 'react'
import Particles from 'react-particles-js'

function Particles() {
    return (
        <>
            <Particles width="100%" height="100vh"
                params={{
                    particles: {
                        number: {
                          value: 85,
                          density: { enable: false, value_area: 4813.800613956863 }
                        },
                        color: { value: "#504747" },
                        shape: {
                          type: "edge",
                          stroke: { width: 0, color: "#ffffff" },
                          polygon: { nb_sides: 4 },
                          image: { src: "img/github.svg", width: 100, height: 100 }
                        },
                        opacity: {
                          value: 0.3286994724774322,
                          random: true,
                          anim: {
                            enable: false,
                            speed: 0.9744926547616141,
                            opacity_min: 0.09744926547616141,
                            sync: false
                          }
                        },
                        size: {
                          value: 3.945738208161363,
                          random: true,
                          anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                        },
                        line_linked: {
                          enable: true,
                          distance: 208.44356791251798,
                          color: "#ffffff",
                          opacity: 0.09620472365193136,
                          width: 2.0844356791251797
                        },
                        move: {
                          enable: true,
                          speed: 6,
                          direction: "none",
                          random: true,
                          straight: false,
                          out_mode: "out",
                          bounce: false,
                          attract: { enable: false, rotateX: 561.194221302933, rotateY: 1200 }
                        }
                      },
                      interactivity: {
                        detect_on: "canvas",
                        events: {
                          onhover: { enable: false, mode: "repulse" },
                          onclick: { enable: true, mode: "push" },
                          resize: true
                        },
                        modes: {
                          grab: { distance: 400, line_linked: { opacity: 1 } },
                          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                          repulse: { distance: 200, duration: 0.4 },
                          push: { particles_nb: 4 },
                          remove: { particles_nb: 2 }
                        }
                      },
                      retina_detect: true
                    }    
                }
              />
            </>
    )
  }
             
                  

export default Particles

