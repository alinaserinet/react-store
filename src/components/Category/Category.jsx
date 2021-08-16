import './Category.scss';

const Category = ({title, image}) => {
    return (
        <div className='card fw-500 category'>
            <div className='category-title'>
                {title}
            </div>
            <div className='product-image' style={{backgroundImage: `url(${image})`}}>
            </div>
        </div>
    );
};

export default Category;