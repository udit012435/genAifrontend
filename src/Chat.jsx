import genAiLogo from "./assets/GenAi_logo-removebg-preview.png"
const Chat = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo Area */}
                    <a className="navbar-brand" href="#"><img src={genAiLogo} alt="" /></a>

                    {/* Buttons on the right */}
                    <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto" role="search">
                            <button
                                className="btn btn-primary"
                                style={{ width: "7vh", marginRight: "1rem", borderRadius: "50px" }}
                                type="submit"
                                title="Share"
                            >
                                <i className="bi bi-share-fill"> </i>
                            </button>
                            <button
                                className="btn btn-outline-primary "
                                style={{ width: "7vh", borderRadius: "50px", borderRight: "100%" }}
                                type="submit"
                                title="Setting"
                            >
                                <i className="bi bi-gear" style={{ fontSize: "20px", }}></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="homePage">
                <div className="text-light text-center" style={{paddingTop: "10rem"}}>
                    <h2>Chat with GenAi</h2>
                </div>
                
                <div className="para text-center">
                    <p style={{width:"50rem"}}>User generative AI to create Images, Videos and More. Harness the power of Artificial Intelligence to up your Social Media Marketing game.</p>
                </div>
                <div className="container">
                    <div id="Chatbox" className="text-center">
                        <input id="chatInput" type="text" placeholder="Ask Any Thing...."/>
                        {/* <button id="btn" className="btn btn-primary">Try GenAI <i className="bi bi-box-arrow-up-right"></i></button> */}
                        <button id="chatbtn" title="Ask"><i className="bi bi-arrow-bar-up"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;