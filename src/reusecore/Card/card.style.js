import styled from 'styled-components';


export const CardWrapper = styled.div`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;

    @media (min-width: 576px){ 
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        margin-bottom: 0; 
    }

`

export const CardBodyWrapper = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`