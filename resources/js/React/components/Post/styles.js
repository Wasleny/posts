import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Content = styled.p`
    padding: 20px;
    margin-bottom: 40px;
`;

export const Button = styled.button`
    border: 2px solid ${(props) => (props.color ? props.color : "")};
    background-color: ${(props) => (props.color ? props.color : "")};
    color: ${(props) => (props.colorFont ? props.colorFont : "")};
    border-radius: 5px;
    font-weight: bold;
    padding: 5px;

    :hover {
        background-color: transparent;
        border-color: ${(props) => (props.color ? props.color : "")};
        color: ${(props) => (props.color ? props.color : "")};
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Line = styled.hr`
    size: 2;
    margin-top: 10px;
`;
