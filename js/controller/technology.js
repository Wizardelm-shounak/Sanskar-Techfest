

import Card from "../view/card.js";

let query = '#cardpapa'

let Artificial = new Card('Artificial Intelligences', `AI, or artificial intelligence, refers to the ability of machines to mimic human-like intelligence and cognitive functions such as learning, problem-solving, reasoning, and decision-making. AI systems use various techniques such as machine learning, deep learning, natural language processing, and computer vision to analyze large amounts of data, recognize patterns, and make predictions or decisions based on that data.`, query)

let Software = new Card(`Software Engineering`, `Software engineering is the process of designing, developing, testing, and maintaining software applications using a structured and systematic approach. It involves the application of engineering principles, such as design, analysis, and testing, to the development and evolution of software systems.`, query);
let Data = new Card('Data Visualization', `Data visualization is the process of presenting data in a graphical or pictorial format, such as charts, graphs, maps, and dashboards, to help users understand and analyze complex information more easily. Data visualizations enable users to see patterns, trends, and relationships in the data that may not be apparent from raw data or text. They can also highlight outliers, exceptions, and anomalies that may require further investigation.`, query)

window.addEventListener('load', e=>{
    Artificial.render()
    Software.render()
    Data.render()
})
