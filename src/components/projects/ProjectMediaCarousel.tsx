import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const CarouselContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    // add breakpoint at 1192px to swap to vw instead of vh
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: min-content;
    // figure out what to do with the breakpoint ?
`;

const CarouselButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    margin: 0 15px;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
`;

const CloseModalButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    padding: 0;
    color: ${({ theme }) => theme.colors.text};
`;

const DotsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

interface DotProps {
    $isActive: boolean;
    onClick?: () => void;
}
  
const Dot = styled.span<DotProps>`
padding: 5px;
margin: 0 5px;
cursor: pointer;
background-color: white;
border-radius: 50%;
transition: transform 0.3s ease-in-out;
${({ $isActive }) =>
    $isActive &&
    css`
        transform: scale(1.2);
    `}
`;

const ProjectMediaCarousel = ({ content, closeModal }: { content: React.ReactNode[], closeModal: () => void }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const currentSlide = content[slideIndex];
    
    const nextSlide = () => {
        setSlideIndex((slideIndex + 1) % content.length);
    };

    const prevSlide = () => {
        setSlideIndex((slideIndex - 1 + content.length) % content.length);
    };

    return (
        <CarouselContainer>
            {currentSlide}
            <ButtonContainer>
                {/* REPLACE THESE WITH IMAGES FOR NICE BUTTONS */}
                <CarouselButton onClick={prevSlide}>&lt;</CarouselButton>
                <DotsContainer>
                    {content.map((_, index) => (
                        <Dot key={index} $isActive={index === slideIndex} onClick={() => setSlideIndex(index)} />
                    ))}
                </DotsContainer>
                <CarouselButton onClick={nextSlide}>&gt;</CarouselButton>
                <CloseModalButton onClick={closeModal}>X</CloseModalButton>
            </ButtonContainer>
        </CarouselContainer>
    );
};

export default ProjectMediaCarousel;