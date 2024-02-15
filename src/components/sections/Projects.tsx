import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import FlipManager from '../projects/FlipManager';

import BarbellImg from '../../../public/project_cards/barbell.webp';
import PaintingImg from '../../../public/project_cards/painting.webp';
import CircuitImg from '../../../public/project_cards/circuit.webp';
import TypewriterImg from '../../../public/project_cards/typewriter.webp';
import BedframeImg from '../../../public/project_cards/bedframe.webp';
import AsciiImg from '../../../public/project_cards/ascii.webp';

// Styled section for the projects
const ProjectsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: stretch;
    gap: 8rem;
    grid-auto-rows: 1fr;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 0 2rem;
`;

const Projects = () => {
    const projectCards = [
        {
            image: BarbellImg,
            title: "Level Up Exercise Log",
            description: "Level Up Exercise Log, my first significant coding project, initiated in 2020, transforms fitness logging into a rewarding, gamified experience. Utilizing React Native and Node.js, it integrates OAuth for secure login and includes a custom SVG graph for progress tracking, demonstrating an early proficiency at implementing novel and innovative solutions."
        },
        {
            image: PaintingImg,
            title: "Fesslerpainting.com",
            description: "Fesslerpainting.com, developed for my own residential painting business. Built using Next.js, the website features a minimalist, responsive design and server-side rendering, showcasing my proficiency in modern web development. This venture, while successful, ultimately led me to follow my true passion for programming."
        },
        {
            image: CircuitImg,
            title: "Turing Complete CPU",
            description: "In 'Turing Complete,' a game that turns CPU design into an interactive learning experience, I constructed a CPU architecture from the ground up, designing circuits and logic gates. While including a video game project might appear unconventional in a professional portfolio, it profoundly enriched my understanding of CPU architecture and the nuances of low-level programming."
        },
        {
            image: TypewriterImg,
            title: "Interactive Story Writer",
            description: "Interactive Story Writer, a Python script I developed to solve a core problem in a group project for a class of mine: crafting a detailed, branching narrative for a text-based adventure game. Leveraging the OpenAI API, and using an innovative algorithm I devised, the script generates a rich, coherent narrative. The result? Our project had an impressive 2186 unique endings."
        },
        {
            image: BedframeImg,
            title: "Floating Bedframe",
            description: "A floating bed frame. Yes, you read that right—a bed frame in my developer portfolio. While it may seem out of place, this bed frame embodies my versatile problem-solving abilities, merging engineering principles and programming skills beyond the digital realm. This project is entirely of my own design. Detailed math was applied to perfect the floating illusion and to engineer a circuit capable of handling the LED's demands."
        },
        {
            image: AsciiImg,
            title: "ASCII Art Generator",
            description: "ASCII Art Generator, a Python script I developed, creatively applies convolution to translate images into colored ASCII art. By averaging color values and brightness, it maps images onto a grid of ASCII characters, each carefully chosen for its visual weight and color. Showcasing my technical prowess with algorithm design and my fascination with the intersection of mathematics and logic with art and creativity."
        }
    ];

    return (
        <ProjectsSection id="Projects">
            {projectCards.map((project, index) => (
                <FlipManager
                    key={index}
                    ProjectCard={ProjectCard}
                    ProjectCardProps={project}
                    ProjectModal={ProjectModal}
                    ProjectModalProps={project}
                />
            ))}
        </ProjectsSection>
    );
};

export default Projects;