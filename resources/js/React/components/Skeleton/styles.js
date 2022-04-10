import styled from "styled-components";

export const SkeletonItem = styled.div`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "1.5vh")};
    margin: ${(props) => (props.margin ? props.margin : "5px 0")};
    border-radius: ${(props) =>
        props.borderRadius ? props.borderRadius : "10px"};
    background-color: gray;
    background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.2) 8%,
        rgba(130, 130, 130, 0.3) 18%,
        rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 2s loading ease-in-out infinite;

    @keyframes loading {
        to {
            background-position-x: -20%;
        }
    }

    ${(props) => (props.otherStyles ? props.otherStyles : "")};
`;
