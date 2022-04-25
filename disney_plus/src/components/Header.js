import styled from "styled-components";
import { auth, provider } from "../Firebase";

export default function Header(props){

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result)
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <Nav>
            <Logo>
                <img src="/assets/logo.svg" alt=""/>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/assets/home-icon.svg" alt="Home"/>
                    <span>HOME</span>
                </a>
                

                <a href="/search">
                    <img src="/assets/search-icon.svg" alt="search"/>
                    <span>SEARCH</span>
                </a>
                

                <a href="/Watchlist">
                    <img src="/assets/watchlist-icon.svg" alt="Watchlist"/>
                    <span>WATCHLIST</span>
                </a>
                
                
                <a href="/Originals">
                    <img src="/assets/original-icon.svg" alt="Originals"/>
                    <span>ORIGINALS</span>
                </a>
                
                
                <a href="/Movies">
                    <img src="/assets/movie-icon.svg" alt="Movies"/>
                    <span>MOVIES</span>
                </a>
                
                
                <a href="/Series">
                    <img src="/assets/series-icon.svg" alt="Series"/>
                    <span>SERIES</span>
                </a>
                
            </NavMenu>

            <Login onClick={handleAuth}>Login</Login>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;

    img {
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 5px;
        white-space: nowrap;
        position: relative;

        &:before {
            content: "";
            background-color: rgb(249, 249, 249);
            bottom: -6px;
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            border-radius: 0px 0px 4px 4px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover {
        span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
        }
    }
}
    // @media (max-width: 768px){
    //     display: none;
    // }
`

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9F9F9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #f9F9F9;
        color: #000;
        border-color: transparent;
    }
`