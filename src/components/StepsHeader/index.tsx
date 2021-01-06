import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import {
  Container,
  StepsContent,
  StepsTitle,
  StepItems,
  StepItem,
  StepNumber,
} from './styles';

interface StepsHeaderProps {
  title: string;
  steps: string[];
}

const StepsHeader: React.FC<StepsHeaderProps> = ({ title, steps }) => {
  return (
    <Container>
      <StepsContent>
        <StepsTitle>{title}</StepsTitle>
        <StepItems>
          {steps.map((step, index) => {
            return (
              <StepItem key={index}>
                <StepNumber>{index + 1}</StepNumber>
                <span>{ReactHtmlParser(step)}</span>
              </StepItem>
            );
          })}
        </StepItems>
      </StepsContent>
    </Container>
  );
};

export default StepsHeader;
