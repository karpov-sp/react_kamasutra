import React from "react";
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://99designs-acquisition-frontend.imgix.net/serverless/images/categoryPage/hero/logo-design/04-artsigma.jpg?auto=format&w=300&h=300"
                    className="App-logo" alt="logo"/>
            </header>
            <nav className="nav">
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className="content">
                <div>
                    <img src='https://cdn.unifiedcommerce.com/content/product/large/628136654449-L.jpg'/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
