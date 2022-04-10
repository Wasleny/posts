const { CardStyle } = require("./styles");

const Card = ({children}) => {
    return <CardStyle>{children}</CardStyle>;
};

export default Card;
