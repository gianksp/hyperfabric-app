import styled, { css } from "styled-components"; 
const TextareaWrapper = styled.div`
margin-bottom: 20px;
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        display: block;
        width: 100%;
        padding: 6px 12px;
        border: 1px solid #ced4da;
        resize: inherit;
        border-radius: 4px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; 
    }
`

export default TextareaWrapper;