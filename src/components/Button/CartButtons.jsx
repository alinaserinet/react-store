import Button from "./Button";
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import {useDispatch} from "react-redux";
import {changeCount} from "../../redux/factories";

const CartButtons = ({id, count}) => {
    const dispatch = useDispatch();

    function handleChange(count) {
        dispatch(changeCount(id, count));
    }

    return (
        <div className='button-group'>
            <Button className='button circle white' onClick={() => handleChange(-1)}>
                <AiOutlineMinus size={24}/>
            </Button>
            <div className='counter'>{count}</div>
            <Button className='button circle white' onClick={() => handleChange(1)}>
                <AiOutlinePlus size={24}/>
            </Button>
        </div>
    );
};

export default CartButtons;