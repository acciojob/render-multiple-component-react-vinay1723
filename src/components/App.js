import React, { Component, useState } from "react";
import "../styles/App.css";

const dreamProjects = [
  {
    name: "NeuroFit AI",
    description:
      "A personalized AI-driven fitness and mental health platform that analyzes your daily habits, stress levels, and biometric data to create a dynamic workout and meditation plan.",
  },
  {
    name: "EcoTrack",
    description:
      "A mobile app that helps users track their carbon footprint in real-time and suggests eco-friendly alternatives for transportation, food, and shopping.",
  },
  {
    name: "EduVerse",
    description:
      "A VR-powered learning platform that lets students explore historical events, scientific concepts, and literature inside immersive 3D worlds.",
  },
  {
    name: "FarmLink",
    description:
      "An IoT-based solution that connects farmers with market trends, weather predictions, and automated irrigation systems to improve crop yield.",
  },
  {
    name: "LinguaMate",
    description:
      "An AI language learning companion that engages in natural conversations, corrects mistakes instantly, and adapts lessons to the learner’s style.",
  },
  {
    name: "SkillSync",
    description:
      "A career growth platform that uses AI to match your skills with emerging job roles and suggests short, personalized learning paths.",
  },
  {
    name: "HealthLens",
    description:
      "An AI-powered tool that uses your smartphone camera to detect early signs of skin conditions, eye problems, or nutritional deficiencies.",
  },
];

const App = () => {
  return (
    <div id="main">
      <div className="ns-wrapper">
        {dreamProjects.map((project) => (
          <>
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </>
        ))}
      </div>
    </div>
  );
};

// function Project({ project }) {
//   return (
//     <div>
//       <h1 data-ns-test="project-name">{project.name}</h1>
//       <p data-ns-test="project-description">{project.description}</p>
//     </div>
//   );
// }

export default App;
