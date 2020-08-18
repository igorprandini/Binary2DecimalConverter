import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    :root {
        --colorBackgroundDark: #2b2f36;
        --colorFontPrimaryDark: #e3e3e4;
        --colorFontSecundaryDark: #cfd3d8aa;
        --colorBackgroundInputDark: #29292D;
        --colorBorderNormalDark: #3F3F41;
        --colorBorderErrorDark: #FF9494;
        --colorButtonPrimaryDark: #52008b;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root, .App {
        position: relative;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        overflow-x: hidden;
        text-rendering: optimizelegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    body, h1, p, span, input, button {
        font-family: 'Oswald', 'Poppins', 'Roboto Condensed', Arial, Helvetica, sans-serif;
    }

    h1, p, span {
        margin: 0;
        padding: 0;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: 100%;
    background-color: var(--colorBackgroundDark);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 3em;
        color: var(--colorFontPrimary);
        font-weight: 300;
        cursor: default;

        @media (max-width: 768px) {

        }
    }

    p {
        font-size: 1.8em;
        color: var(--colorFontSilver);
        font-weight: 200;
        text-align: center;
        cursor: default;
    }

    span {
        font-size: 1.3em;
        color: var(--colorFontSilver);
        font-weight: 300;
        text-align: center;
        cursor: default;
    }
`;

export const Form = styled.form`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    height: 100%;
    padding: 0 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--colorButtonPrimaryDark);
    color: var(--colorFontPrimaryDark);
    border: none;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: var(--colorBackgroundInputDark);
    color: var(--colorFontSecundaryDark);
    font-size: 1.8em;
    letter-spacing: 0.06em;
    padding: 10px;
    border: none;
    border-radius: 0;
    display: block;
    outline: 0;
`;

export const ContainerInput = styled.div`
    position: relative;
    width: 100%;
    max-width: 450px;
    height: 45px;
    margin: 15px 0;
    display: flex;
    flex-flow: row nowrap;

    ${Input} {
        border: ${props => props.error ? '1px solid var(--colorBorderErrorDark)' : '1px solid var(--colorBorderNormalDark)' };
        transform: border 0.6s;
    }

    label {
        position: absolute;
        color: ${props => props.error ? 'var(--colorBorderErrorDark)' : 'transparent' };
        font-size: 13px;
        font-weight: normal;
        pointer-events: none;       
        left: 5px;
        top: ${props => props.error ? '-20px' : '-10px' };
        transition: 200ms ease all;
        cursor: default;
    }
`;