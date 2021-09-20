import BottomDoc from "../components/BottomDoc";
import NavBar from "../components/NavBar";
import Header from "../components/Header/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainTemplate = ({children, title}) => {
    return (
        <>
            <NavBar/>
            <Header title={title}/>
            <main>
                <div className='container'>
                    {children}
                </div>
            </main>
            <BottomDoc/>
            <ToastContainer
                theme="colored"
                position="bottom-center"
                autoClose={3000} />
        </>
    );
};

export default MainTemplate;