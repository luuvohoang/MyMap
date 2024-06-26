import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

    const { currentUser } = useContext(AuthContext)

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">FINDING ACCOMMODATION HAS NEVER BEEN EASIER THAN NOW!</h1>
                    <p>
                    Welcome to our homepage - where we provide reliable and quality rental services. 
                    Whether you're looking for a comfortable place to stay, reasonable prices, or
                     a cozy living space, we have suitable options for you. Explore and find your ideal home today!
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200+</h1>
                            <h2>Users</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/02.jpg" alt="" />
            </div>
        </div>
    );
}

export default HomePage;