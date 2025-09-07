
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar.jsx'

const Home = () => {

    const navigate = useNavigate();

    const onClickEvnet = () => {
        navigate('/chat');  // Navigate to the chat page
    };

    return (
        <>  
            <Navbar/>
            <div className="homePage">
                <div className="text-light text-center" style={{paddingTop: "10rem"}}>
                    <h2>Welcome User</h2>
                </div>
                <div className="genAi" >
                    <h1>GENERATIVE AI</h1>
                </div>
                <div className="para text-center">
                    <p style={{width:"50rem"}}>User generative AI to create Images, Videos and More. Harness the power of Artificial Intelligence to up your Social Media Marketing game.</p>
                </div>
                <div className="text-center">
                    <button id="btn" className="btn btn-primary" onClick={onClickEvnet}>Try GenAI <i className="bi bi-box-arrow-up-right"></i></button>
                </div>
            </div>
        </>
    )
}

export default Home;