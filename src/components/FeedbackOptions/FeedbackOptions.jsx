import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, Button, } from './FeedbackOptions.styled';



export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map((option, index) => (
        <Button key={index} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

// (
//   <ButtonContainer>
//     <Button type="button" onClick={onGood}>
//       Добре
//     </Button>
//     <Button type="button" onClick={onNeutral}>
//       Нейтрально
//     </Button>
//     <Button type="button" onClick={onBad}>
//       Погано
//     </Button>
//   </ButtonContainer>
// );
