import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Anuj Kumar</span> . <br/> I am a web-developer from India.
        </h1>
    ),
    2: (
        <InfoBox 
        text="An enthusiastic engineering undergraduate with deep love and passion for developement."
        link="/about"
        btnText="Learn more about me"/>
    ),
    3: (
        <InfoBox 
        text="Worked on multiple personal projects over the past few years. Want to have a look on them?"
        link="/projects"
        btnText="See my work"/>
    ),
    4: (
        <InfoBox 
        text="Have an appropriate job for me? I also look forward to have an amazing experience with you!" 
        link="/contact"
        btnText="Let's connect"/>
    )
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo