import { React } from "react";

// React-router-dom
import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return (
        <>
            <button className="grid h-screen w-screen place-items-center">
                <img src="/logo.png" alt="logo" className="h-52 w-56" onClick={handleClick}/>
            </button>
        </>
       
    )
}

export default Homepage;