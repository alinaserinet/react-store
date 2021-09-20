import './input.scss';

const Input = ({title, type, ...rest}) => {
    return (
        <div className='input-box'>
            <label className='input-label'>{title}</label>
            <input type={type || 'text'} className='input' {...rest} />
        </div>
    );
};

export default Input;