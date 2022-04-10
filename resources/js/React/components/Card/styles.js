import styled from "styled-components";

export const CardStyle = styled.div`
    min-width: 250px;
    background-color: #fff;
    color: black;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    width: ${(props) => (props.width !== null ? props.width : "350px")};
`;
