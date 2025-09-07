import genAiLogo from "./assets/GenAi_logo-removebg-preview.png" 

const Navbar = () => {
    return (
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
                            style={{ width: "10rem", marginRight: "1rem", borderRadius: "50px" }}
                            type="submit"
                        >
                            Try for free
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            style={{ width: "10rem", borderRadius: "50px" }}
                            type="submit"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;