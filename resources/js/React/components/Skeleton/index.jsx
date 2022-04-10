import { SkeletonItem } from "./styles";

const SkeletonContent = ({ children, quantityTextItems }) => {
    return (
        <>
            {children ? (
                <> {children}</>
            ) : (
                <>
                    {quantityTextItems &&
                        Array.from(
                            { length: quantityTextItems },
                            (_, i) => i + 1
                        ).map((item) => <SkeletonItem key={`text${item}`} />)}
                </>
            )}
        </>
    );
};

export default SkeletonContent;
