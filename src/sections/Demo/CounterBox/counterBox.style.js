import styled from "styled-components";

const CounterBoxWrapper = styled.div`

.min {
    padding: 0px;
    margin: 10px 0px;
    font-style: italic;
    font-weight: lighter;
}

.counter {
  position: absolute;
    top: -10px;
    right: -250px;
    font-size: 4em;
}

.c-title {
  position: absolute;
    top: -10px;
    width: 300px;
    right: -470px;
}

.hyperlink {
  margin-top: 0px;
  color: goldenrod;
}

.alert {
    background: goldenrod;
    color: black;
    border-radius: 4px;
    padding: 0px 10px;
    font-weight: 100;
    font-size: 0.9em;
}

.confi {
    background: lightseagreen;
    color: white;
    border-radius: 4px;
    padding: 0px 10px;
    font-weight: bold;
    font-size: 0.9em;
}

textarea {
    margin-top: 10px;
    font-size: 1.2em;
    width: 340px;
    border: 3px solid #290E59;
    border-radius: 8px;
    padding: 4px 15px !important;
    font-weight: 100;
    font-style: initial;
    font-family: inherit;
 }

 img {
     height:60px;
 }

 .clink {
    position: absolute;
    top: 42px;
    margin-bottom: 10px;
    width: 350px;
 }

 .imessage {
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    font-family: "SanFrancisco";
    font-size: 1rem;
    margin: 0 auto 1rem;
    max-width: 600px;
    padding: 0.5rem 1.5rem;
  }
  
  .imessage p {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 90%;
    padding: 0.5rem .875rem;
    position: relative;
    word-wrap: break-word;
  }
  
  .imessage p::before,
  .imessage p::after {
    bottom: -0.1rem;
    content: "";
    height: 1rem;
    position: absolute;
  }
  
  p.from-me {
    align-self: flex-end;
    background-color: #248bf5;
    color: #fff; 
  }
  
  p.from-me::before {
    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid #248bf5;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }
  
  p.from-me::after {
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform:translate(-30px, -2px);
    width: 10px;
  }
  
  p[class^="from-"] {
    margin: 0.5rem 0;
    width: fit-content;
  }
  
  p.from-me ~ p.from-me {
    margin: 0.25rem 0 0;
  }
  
  p.from-me ~ p.from-me:not(:last-child) {
    margin: 0.25rem 0 0;
  }
  
  p.from-me ~ p.from-me:last-child {
    margin-bottom: 0.5rem;
  }
  
  p.from-them {
    align-items: flex-start;
    background-color: aliceblue;
    color: #000;
  }
  
  p.from-them:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid aliceblue;
    border-top: 15px solid aliceblue;
    border-bottom: 15px solid transparent;
    left: -18px;
    top: 4px;
}
  
  
  p[class^="from-"].emoji {
    background: none;
    font-size: 2.5rem;
  }
  
  p[class^="from-"].emoji::before {
    content: none;
  }
  
  .no-tail::before {
    display: none;
  }
  
  .margin-b_none {
    margin-bottom: 0 !important;
  }
  
  .margin-b_one {
    margin-bottom: 1rem !important;
  }
  
  .margin-t_one {
    margin-top: 1rem !important;
  }
  
  
  
  
  
  
  
  
  
  
  .sco {
    margin-left: 8px;
    margin-right: 8px;
  }
  
  
  
  /* general styling */
  @font-face {
    font-family: "SanFrancisco";
    src:
      url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff2") format("woff2"),
      url("https://cdn.rawgit.com/AllThingsSmitty/fonts/25983b71/SanFrancisco/sanfranciscodisplay-regular-webfont.woff") format("woff");
  }
  
  body {  
    font-family: -apple-system, 
      BlinkMacSystemFont, 
      "Segoe UI", 
      Roboto, 
      Oxygen-Sans, 
      Ubuntu, 
      Cantarell, 
      "Helvetica Neue", 
      sans-serif;
    font-weight: normal;
    margin: 0;
  }
  
  .container {
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem;
  }

  .comment {
    color: #222;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    max-width: 100%;
    padding: 0;
  }
  
  @media screen and (max-width: 800px) {
    body {
      margin: 0 0.5rem;
    }
  
    .container {
      padding: 0.5rem;
    }
  
    .imessage {
      font-size: 1.05rem;
      margin: 0 auto 1rem;
      max-width: 600px;
      padding: 0.25rem 0.875rem;
    }
  
    .imessage p {
      margin: 0.5rem 0;
    }
  }
`;

export default CounterBoxWrapper;
