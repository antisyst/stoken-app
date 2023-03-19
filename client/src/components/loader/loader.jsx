import './loader.scss';

const Loader = () => {
    return(
        <div className="flex-row justify-center align-center text-center">
            <div className='animate-spin rounded-full custom-loader-component' />
        </div>
    )
}

export default Loader;