

import Card from "../view/card.js";

let query = '#cardpapa'

let Mechanical = new Card('Mechanical Engineering', `Mechanical engineering is a branch of engineering that deals with the design, development, and manufacturing of mechanical systems and devices, such as machines, engines, vehicles, and robots, using principles of mechanics, thermodynamics, and materials science. Mechanical engineers apply their knowledge of physics, mathematics, and engineering to solve problems related to the design, construction, and operation of mechanical systems.`, query)

let Aerospace = new Card('Aerospace Engineering', `Aerospace engineering is a specialized field of engineering that focuses on the design, development, testing, and maintenance of vehicles that operate in air or space. Aerospace engineers apply the principles of physics, mathematics, and materials science to solve problems related to the design and construction of aircraft, spacecraft, and missiles.`, query);
let Civil = new Card('Civil Engineering', `Civil engineering is a branch of engineering that deals with the design, construction, and maintenance of the built environment, including buildings, roads, bridges, tunnels, airports, water and sewage systems, and other infrastructure. Civil engineers apply their knowledge of mathematics, physics, and materials science to design and oversee construction projects, ensuring they are safe, efficient, and environmentally sustainable.`, query)

window.addEventListener('load', e=>{
    Mechanical.render()
    Aerospace.render()
    Civil.render()
})
