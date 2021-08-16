import './Button.scss';
import {Link} from "react-router-dom";
const Button = ({children, className, to, ...rest}) => {
    if(to) {
        return (
            <Link className={className} to={to} {...rest}>
                {children}
            </Link>
        )
    }

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;