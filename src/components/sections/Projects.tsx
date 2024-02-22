import React from 'react';
import styled from 'styled-components';

import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import FlipManager from '../projects/FlipManager';
import ProjectMedia from '../projects/ProjectMedia';

import BarbellImg from '../../../public/project_cards/barbell.webp';
import PaintingImg from '../../../public/project_cards/painting.webp';
import CircuitImg from '../../../public/project_cards/circuit.webp';
import TypewriterImg from '../../../public/project_cards/typewriter.webp';
import BedframeImg from '../../../public/project_cards/bedframe.webp';
import AsciiImg from '../../../public/project_cards/ascii.webp';

import CpuCircuit from '../../../public/projects/turing_complete/cpu_circuit.png';

const ProjectsSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 2rem;
    align-items: stretch;
    grid-auto-rows: 1fr;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 0 2rem;

    @media (min-width: 768px) {
        gap: 4rem;
        padding: 0 4rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 850px) {
        gap: 6rem;
        padding: 0 6rem;
    }
    @media (min-width: 900px) {
        gap: 8rem;
        padding: 0 8rem;
    }
    @media (min-width: 1024px) {
        gap: 9rem;
        padding: 0 9rem;
    }
    @media (min-width: 1100px) {
        gap: 11rem;
        padding: 0 11rem;
    }
    @media (min-width: 1200px) {
        gap: 13rem;
        padding: 0 13rem;
    }
`;

const FlipManagerPlaceholder = styled.div`
    width: 100%;
    height: 100%;
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

    const ProjectModalContent = [
        [<ProjectMedia
            key={0}
            image={CpuCircuit}
            caption="Turing Complete CPU Circuit"
            width={0} // 0 dimensions placeholders, actual size is calculated in ProjectMediaCarousel.tsx
            height={0}
        />,
        <ProjectMedia
            key={1}
            video="https://www.youtube.com/embed/dQw4w9WgXcQ"
            caption="Turing Complete CPU Maze Game"
            width={0}
            height={0}
        />],
    ];

    // Zip the project cards and project modal content together
    let FlipManagerProps: {
        ProjectCard: React.ComponentType<any>;
        ProjectCardProps: any;
        ProjectModal: React.ComponentType<any>;
        ProjectModalProps: any;
    }[] = [];

    for (let i = 0; i < projectCards.length; i++) {
        FlipManagerProps.push({
            ProjectCard: ProjectCard,
            ProjectCardProps: projectCards[i],
            ProjectModal: ProjectModal,
            ProjectModalProps: ProjectModalContent[0]
        });
    }
    
    return (
        <ProjectsSection id="Projects">
            {projectCards.map((project, index) => {
                return (
                    <FlipManager
                        key={index}
                        ProjectCard={ProjectCard}
                        ProjectCardProps={project}
                        ProjectModal={ProjectModal}
                        ProjectModalProps={ProjectModalContent[0]}
                    />
                );
            })}
        </ProjectsSection>
    );
};

export default Projects;