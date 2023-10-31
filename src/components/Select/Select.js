import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);



  return (
    <Wrapper>
    <NativeSelectElement value={value} onChange={onChange}>
      {children}
    </NativeSelectElement>
    <PresentationalElement>
        {displayedValue}
        <IconWrapper style={{'--size': (24 / 16) + 'rem'}}>
            <Icon id='chevron-down' strokeWidth={2} size={24}/>
        </IconWrapper>
    </PresentationalElement> 
    </Wrapper>
  );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
    border-radius: 0.5rem;
`;

const NativeSelectElement = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    /* overrides Safari default height */
    -webkit-appearance: none;
    appearance: none;
`;

const PresentationalElement = styled.div`
    background: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-family: Roboto;
    font-size: 1rem;
    padding: 0.75rem 3rem 0.75rem 1rem;
    border-radius: 0.5rem;

    ${NativeSelectElement}:focus + & {
        outline: 1px dotted #212121;
        /* chrome default focus style */
        outline: 5px auto -webkit-focus-ring-color;
    }
    ${NativeSelectElement}:hover + & {
        color: ${COLORS.black}
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 6px;
    width: var(--size);
    height: var(--size);
    margin: auto;
    pointer-events: none;
`;

export default Select;
