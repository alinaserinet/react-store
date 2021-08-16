import S from "react-loading-skeleton";

export const CategoriesSkeleton = () => {
    return (
        <S count={4} height={100} style={{marginTop: '1rem', display: 'block'}}/>
    );
};

export const CategorySkeleton = () => {
    return (
        <S count={4} height={130} style={{marginTop: '1.3rem', display: 'block'}}/>
    );
};