

import Card from "../view/card.js";

let query = '#cardpapa'

let Math = new Card('Mathematics', `M in STEM stands for Mathematics. Mathematics is a fundamental discipline that provides the foundation for many other STEM fields. It involves the study of numbers, quantities, and shapes, and their relationships and operations. Mathematics is essential
in fields such as engineering, physics, computer science, and economics, as it provides them with tools to model and solve complex problems. The use of mathematics has enabled humans to make advancements in technology, medicine,
and research.`, query)

let Science = new Card('Science', `The "S" in STEM stands for Science, which involves the study of the natural world and the phenomena that occur within it. Science is a broad field that encompasses many sub-disciplines, including biology, chemistry, physics, astronomy, and geology,
<br> among others. Scientists use observation, experimentation, and analysis to understand the natural world, develop new theories and hypotheses, and test their ideas through rigorous methods. Science plays a critical role in
advancing our understanding<br> of the world and improving our lives. It has led to many significant discoveries and innovations, such as the discovery of DNA and the development of vaccines, new materials, and technologies. Scientists
work in a variety of settings, including<br> universities, research institutions, government agencies, and private industry, and they collaborate across disciplines to solve complex problems and tackle major challenges facing society.
mentioned below are fields that come under Science`, query);
let Engineering = new Card('Engineering', ` E in STEM stands for Engineering. It refers to the application of scientific knowledge to design, build, and create new products, structures, machines, and systems. Engineering involves using critical thinking, problem solving, and design skills to develop
solutions to practical problems that have a real-world impact. Some examples of engineering fields include mechanical engineering, electrical engineering, civil engineering, and biomedical engineering. Engineering is an essential
part of STEM education as it plays a crucial role in modernizing and innovating many industries and technologie`, query);
let Technology = new Card('Technology', `Technology is an essential component of STEM (Science, Technology, Engineering, and Mathematics) education. It involves the use of tools, equipment, machines, devices,<br> and software applications to solve problems, create products,
and achieve objectives. <br> Technology encompasses a wide range of fields, including computer science, electronics, telecommunications,<br> robotics, automation, and manufacturing, among others. In STEM education, technology is used to facilitate the
teaching and learning of science,<br> technology, engineering, and math concepts. It enables students to explore and experiment with ideas, data, and information, using digital media, simulations, and<br> interactive tools. Technology
also provides opportunities for students to collaborate, communicate, and share their work with others worldwide.`, query)

window.addEventListener('load', e=>{

    Science.render()
    Technology.render()
    Engineering.render()
    Math.render();
})
