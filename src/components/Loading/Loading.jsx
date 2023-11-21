import { Oval } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }} >
            <Oval
                height={80}
                width={80}
                color="#0b44cd"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#3470ff"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
}

export default Loader;