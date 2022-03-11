import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #root{
    background-color: ${({theme}) => theme.colors.mainBackgroundColor};
  }
  .change-theme{
    background-color: ${({theme}) => theme.colors.toggleBackgroundColor};
  }
  #span{
    background-color: ${({theme}) => theme.colors.keyBackgroundColor_Red};
  }
  li{
    color: ${({theme}) => 
      (theme.name == 'Theme 1'?theme.colors.TextColor_White
      : theme.name == 'Theme 2'?theme.colors.TextColor_Dark
      : theme.name == 'Theme 3'?theme.colors.KeyShadowColor_Grayish 
      : theme.colors.TextColor_White)
    };
  }
  .calc{
    color: ${({theme}) => 
      (theme.name == 'Theme 1'?theme.colors.TextColor_White
      : theme.name == 'Theme 2'?theme.colors.TextColor_Dark
      : theme.name == 'Theme 3'?theme.colors.KeyShadowColor_Grayish 
      : theme.colors.TextColor_White)
    };
  }
  h3{
    color: ${({theme}) => 
      (theme.name == 'Theme 1'?theme.colors.TextColor_White
      : theme.name == 'Theme 2'?theme.colors.TextColor_Dark
      : theme.name == 'Theme 3'?theme.colors.KeyShadowColor_Grayish 
      : theme.colors.TextColor_White)
    };
  }
  .Button{
    color: ${({theme}) => theme.name == 'Theme 3'? theme.colors.KeyShadowColor_Grayish : theme.colors.TextColor_Dark};
    background-color: ${({theme}) => {
      if(theme.name == 'Theme 1'){
        return theme.colors.TextColor_White;
      }else if(theme.name == 'Theme 2'){
        return theme.colors.screenBackgroundColor;
      }else if(theme.name == 'Theme 3'){
        return theme.colors.keyShadowColor_Dark;
      }
    }};
  }
  .Result{
    color: ${({theme}) => {
      if(theme.name == 'Theme 1'){
        return theme.colors.TextColor_White
      }else if(theme.name == 'Theme 2'){
        return theme.colors.TextColor_Dark
      }else if(theme.name == 'Theme 3'){
        return theme.colors.KeyShadowColor_Grayish
      }
    }
  };
    background-color: ${({theme}) => theme.colors.screenBackgroundColor};
  }
  .Buttons{
    background-color: ${({theme}) => theme.colors.toggleBackgroundColor};
  }
  #Del{
    color: ${({theme}) => theme.colors.TextColor_White};
    background-color: ${({theme}) => theme.name == 'Theme 3'?theme.colors.screenBackgroundColor : theme.colors.keyBackgroundColor_Desaturated};
  }
  #bigButtons1{
    color: ${({theme}) => theme.colors.TextColor_White};
    background-color: ${({theme}) => theme.name == 'Theme 3'?theme.colors.screenBackgroundColor : theme.colors.keyBackgroundColor_Desaturated};
  }
  #bigButtons2{
    color: ${({theme}) => theme.name == 'Theme 3'? theme.colors.TextColor_Dark :theme.colors.TextColor_White};
    background-color: ${({theme}) => theme.colors.keyBackgroundColor_Red};
  }

`

