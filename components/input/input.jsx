import React from 'react';
import { Box } from 'rebass/styled-components';
import { variant } from 'styled-system';
import styled from 'styled-components';

export const sizeVariant = variant({
  prop: 'size',
  scale: 'inputs.sizes',
  variants: {
    large: {},
    normal: {},
    small: {},
  },
});

const StyledInput = styled(Box)`
  ${sizeVariant}
`;

export const Input = ({
  suggestions,
  children,
  onKeyEnter,
  placeholder,
  value,
  type,
  ...props
}) => {
  return (
    <Box width="fit-content">
      <StyledInput
        as="input"
        placeholder={placeholder}
        tx="inputs"
        type={type || 'text'}
        value={value}
        {...props}
      />
    </Box>
  );
};

Input.defaultProps = {
  size: 'large',
  variant: 'primary',
};

export default Input;
