import Template from "../Template/MainTemplate";
import Input from "../components/Input";
import Button from "../components/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {fetchToken} from "../redux/userSlice";

const Login = () => {
    const [username, setUsername] = useState('mor_2314');
    const [password, setPassword] = useState('83r5^_');
    const dispatch = useDispatch();

    function handleLoginForm(e) {
        e.preventDefault();
        dispatch(fetchToken({username, password}))
    }

    return (
        <Template title='Login'>
            <article className='login-wrapper'>
                <div className='login-box'>
                    <form onSubmit={handleLoginForm}>
                        <Input
                            title='email'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            title='Password'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button className='button primary block' >Login</Button>
                    </form>
                </div>
            </article>
        </Template>
    );
};

export default Login;