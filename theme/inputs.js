export default {
  primary: {
    border: 'solid 2px #0178ff',
    paddingLeft: '20px',
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#0077ff',
    borderRadius: '25px',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    webkitAppearance: 'none',
    '&:focus': {
      outlineWidth: 0,
    },
    '&::placeholder': {
      color: '#b2b2b2',
    },
    '::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
    },
    '::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },
  },
};

export const inputSizes = {
  large: {
    width: '390px',
    height: '50px',
  },
  large2: {
    width: '350px',
    height: '50px',
  },
  normal: {
    width: '210px',
    height: '50px',
  },
  small: {
    width: '75px',
    height: '50px',
    textAlign: 'center',
    paddingLeft: '0px',
  },
  smallest: {
    width: '50px',
    height: '40px',
    textAlign: 'center',
    paddingLeft: '0px',
  },
};
