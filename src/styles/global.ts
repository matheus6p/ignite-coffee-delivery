import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .title-xl{font-size: 3rem;}
  .title-l{font-size: 2rem;}
  .title-m{font-size: 1.5rem;}
  .title-s{font-size: 1.25rem;}
  .title-xs{font-size: 1.125rem;}
  .title-xl,.title-l, .title-m {font-weight: 800;}
  .title-s,.title-xs {font-weight: 700;}
  .title-xl,.title-l, .title-m, .title-s,.title-xs  {line-height: 130%; font-family: 'Baloo 2', sans-serif;}

  .text-l {font-weight: 400;}
  .text-m {font-weight: 400;}
  .text-s {font-weight: 400; font-size: 0.875rem}
  .text-xs {font-weight: 700; font-size: 0.75rem}
  .text-l-bold {font-weight: 700;}
  .text-m-bold {font-weight: 700;}

  .text-l, .text-l-bold {font-size: 1.25rem;}
  .text-m-bold, .text-m-bold {font-size: 1rem;}

  .text-l,
  .text-m,
  .text-s,
  .text-xs,
  .text-l-bold,
  .text-m-bold {
    line-height: 130%;
  }
  
  .tag {
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;
  }

  .button-l, .button-m {
    line-height: 160%;
  }

  .button-l {
    font-size: 0.875rem;
    font-weight: 700;
  }

  .button-m {
    font-size: 0.75rem;
    font-weight: 400;
  }

`;
