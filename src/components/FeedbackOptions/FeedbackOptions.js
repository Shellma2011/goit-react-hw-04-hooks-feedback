import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border: 1px solid grey;
  border-radius: 2%;
  width: 100px;
  padding: 5px 15px;
  background-color: teal;
  color: #fff;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
`;

const FeedbackOptions = ({ options, name, onLeaveFeedback }) => (
  <ButtonStyle type="buttom" name={name} onClick={onLeaveFeedback}>
    {options}
  </ButtonStyle>
);

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
