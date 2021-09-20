import {IoMdClose} from "react-icons/io";

const CloseBtn = ({onClick, ...rest}) => {
    return (
        <button
            className='button close-btn'
            onClick={onClick}
            {...rest} >
            <IoMdClose/>
        </button>
    );
};

export default CloseBtn;