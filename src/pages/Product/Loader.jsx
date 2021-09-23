import L from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='product-loader-wrapper'>
            <L
                type="ThreeDots"
                color="#9B9B9B"
                height={75}
                width={75}
            />
        </div>
    );
};

export default Loader;