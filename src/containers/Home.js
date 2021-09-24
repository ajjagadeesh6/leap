import React from 'react';
import { useDispatch } from "react-redux";
import { signout } from "../redux";

function Home(props) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    };
    
    return (
        <div>
            <h1>Welcom</h1>
            <li className="nav-item">
                <span className="nav-link" onClick={logout}>
                    Signout
                </span>
            </li>
        </div>

    );
}

export default Home