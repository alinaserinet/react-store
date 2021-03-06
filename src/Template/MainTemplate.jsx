import BottomDoc from "../components/BottomDoc";
import NavBar from "../components/NavBar";
import Header from "../components/Header/Header";
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
        </>
    );
};

export default MainTemplate;