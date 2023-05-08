import styled from 'styled-components';

export const Jaw = styled.div`
  position: absolute;
  grid-column: 1;
  width: 422px;
  height: 639px;
`
export const UpperJawLeftFirst = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 49.72px;
  height: 42.82px;
  left: 160.73px;
  top: 28.48px;
  border-radius: 18px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftSecond = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 41.51px;
  height: 37.65px;
  left: 120.98px;
  top: 44.23px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftThird = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 40.22px;
  height: 42.95px;
  left: 89.89px;
  top: 65.86px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftFour = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 49.81px;
  height: 38.43px;
  left: 69.46px;
  top: 100.99px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftFive = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 47.79px;
  height: 37.36px;
  left: 53.44px;
  top: 139.55px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftSix = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 60.66px;
  height: 60.94px;
  left: 33.91px;
  top: 173.28px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftSeven = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 61.77px;
  height: 57.69px;
  left: 22.13px;
  top: 232px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawLeftEight = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 62.78px;
  height: 52.67px;
  left: 14.98px;
  top: 282.41px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightFirst = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 49.72px;
  height: 42.82px;
  left: 212.24px;
  top: 28.54px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightSecond = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 41.51px;
  height: 37.65px;
  left: 267.18px;
  top: 34.17px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightThird = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 40.22px;
  height: 42.95px;
  left: 292.58px;
  top: 65.93px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightFour = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 49.81px;
  height: 38.43px;
  left: 303.42px;
  top: 101.05px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightFive = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 47.79px;
  height: 37.36px;
  left: 321.46px;
  top: 139.62px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightSix = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 60.66px;
  height: 60.94px;
  left: 328.12px;
  top: 173.34px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightSeven = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 61.77px;
  height: 57.69px;
  left: 338.78px;
  top: 227.54px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const UpperJawRightEight = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 57.82px;
  height: 50.39px;
  left: 349.89px;
  top: 284.76px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftFirst = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 33.12px;
  height: 31.51px;
  left: 177.15px;
  top: 607.57px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftSecond = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 31.99px;
  height: 36.59px;
  left: 146.17px;
  top: 597.91px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftThird = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 36.57px;
  height: 38.26px;
  left: 113.84px;
  top: 583.92px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftFour = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 42.1px;
  height: 40.89px;
  left: 83.99px;
  top: 553.82px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftFive = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 44.04px;
  height: 40.8px;
  left: 59.39px;
  top: 519.5px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftSix = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 62.45px;
  height: 63.42px;
  left: 31.16px;
  top: 461.36px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftSeven = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 55.66px;
  height: 61.58px;
  left: 20.98px;
  top: 402.39px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawLeftEight = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean
}>`
  position: absolute;
  width: 48.57px;
  height: 51.69px;
  left: 22.2px;
  top: 351.99px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightFirst = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 33.12px;
  height: 31.51px;
  left: 212.42px;
  top: 607.63px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightSecond = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 31.99px;
  height: 36.59px;
  left: 244.52px;
  top: 597.97px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightThird = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 36.57px;
  height: 38.26px;
  left: 272.28px;
  top: 583.99px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightFour = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 42.1px;
  height: 40.89px;
  left: 296.6px;
  top: 553.88px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightFive = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 44.04px;
  height: 40.8px;
  left: 319.25px;
  top: 519.56px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightSix = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 62.45px;
  height: 63.42px;
  left: 329.08px;
  top: 461.43px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightSeven = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 55.66px;
  height: 61.58px;
  left: 346.04px;
  top: 402.45px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`
export const DownJawRightEight = styled.img<{
    isSelected:boolean,
    isNoTooth: boolean,
}>`
  position: absolute;
  width: 48.57px;
  height: 51.69px;
  left: 351.92px;
  top: 352.05px;
  opacity: ${props => props.isNoTooth ? '5%': props.isSelected ? '70%' : '100%'};
  border: ${props =>  props.isSelected ? '4px solid red' : ''};
  cursor: pointer;
  :hover{
    opacity: 30%;
  }
`