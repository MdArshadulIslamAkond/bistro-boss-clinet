import image from '../../../src/assets/others/cupcake.gif';

const LoadingPage = () => {
    return (
        <div className='text-center w-1/3 mx-auto mt-40'>
            <div className=''>
            <img src={image} alt="" className='mx-auto' />
            <p className='text-3xl my-4'>Welcome to Bistro Boss Restaurant</p>
            </div>
        </div>
    );
};

export default LoadingPage;