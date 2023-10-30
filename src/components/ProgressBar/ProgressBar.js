/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        height: 0.5,
        padding: 0,
        radius: 0.25
    },
    medium: {
        height: 0.75,
        padding: 0,
        radius: 0.25
    },
    large: {
        height: 1.5,
        padding: 0.25,
        radius: 0.5
    }
}

const ProgressBar = ({ value, size }) => {
    const styles = SIZES[size];

    if(!styles) {
        throw new Error(`Unknown size passed to ProgressBar: ${value}`)
    };

  return <Wrapper
    role="progressbar"
    aria-label="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{
        '--radius': styles.radius + 'rem', 
        '--padding': styles.padding + 'rem'
        }}>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <BarWrapper>
        <Bar style={{
            '--width': value + '%', 
            '--height': styles.height + 'rem'
            }}/>
        </BarWrapper>
    </Wrapper>
};

const Wrapper = styled.div`
    box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
    background: ${COLORS.transparentGray15};
    border-radius: var(--radius);
    padding: var(--padding);   
`;

const BarWrapper = styled.div`
    border-radius: 4px;
    /* round off corners when progtress near full */
    overflow: hidden;
`;

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background:  ${COLORS.primary};
    border-radius: 0.25rem 0rem 0rem 0.25rem;
`;

export default ProgressBar;
