import './ChangeTheme.scss';
import { useState } from 'react';
import _ from 'lodash';
import {useTheme} from '../../themes/Theme';
import { getFromLS } from '../../utils/storage';
import { GlobalStyles } from '../../themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';

function ChangeTheme(){
  const [clickState, setClickState] = useState(0);
  const [left, setLeft] = useState(0);
  const [answer, setAnswer] = useState('5px');
  const {theme, themeLoaded, setMode} = useTheme();
  const themes = getFromLS('all-themes')

  function Click(){
    if(clickState<2){
      setClickState(clickState+1);
      setLeft(left+26);
      setAnswer(`${left+26}px`)

    }else{
      setClickState(0);
      setLeft(0);
      setAnswer('5px')
    }
    if(clickState+1 == 1){
      setMode(themes.data.theme2);
    }else if(clickState+1 == 2){
      setMode(themes.data.theme3)
    }else{
      setMode(themes.data.theme1)
    }
    console.log(clickState+1)
  }

  return (
    <ThemeProvider theme ={ theme }>
      <GlobalStyles />
      <div className="Theme-Container">
        <ul>
          <li style={{left: '9px'}}>1</li>
          <li style={{left: '40%'}}>2</li>
          <li style={{right: '13px'}}>3</li>
        </ul>
        <div className="change-theme"onClick={Click} >
          <span id="span" onClick={Click} style={{ left: `${answer}`}} ></span>
        </div>
    </div>
    </ThemeProvider>
    
  );
}

export default ChangeTheme;