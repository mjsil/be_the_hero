import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 16px Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        background: #e9e9e9;
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    form textarea {
        width: 100%;
        min-height: 140px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        line-height: 24px;
        resize: vertical;
    }

    a {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }

        svg {
            margin-right: 8px;
        }
    }
`;
