import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { auth, provider } from "../Firebase";
import { selectUserphoto, selectUserName, selectUserEmail, setUserLoginDetails, setSignOutState } from "../features/user/userSlice";
import { useEffect } from "react";

export default function Header(props){
    const dispatch = useDispatch()
    const history = useNavigate()
    const username = useSelector(selectUserName)
    const userphoto = useSelector(selectUserphoto)
    const useremail = useSelector(selectUserEmail)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                history("/home")
            }
        })
    }, [username])

    const handleAuth = () => {
        if (!username){
            auth.signInWithPopup(provider).then((result) => {
                setUser(result.user);
            }).catch((error) => {
                alert(error.message)
            })
        } else if (username){
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history('/')
            }).catch((err) => alert(err.message))
        }
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    return (
        <Nav>
            <Logo>
                <img src="/assets/logo.svg" alt=""/>
            </Logo>

            { !username ? 
                <Login onClick={handleAuth}>Login</Login>
                : 
                <>
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
            <SignOut>
                <UserImg src={userphoto} alt={username} />
                <DropDown>
                    <span onClick={handleAuth}>Sign out</span>
                </DropDown>
            </SignOut>
            </>
            }
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

const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0px;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgb(151, 151, 151);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`

const SignOut = styled.div`
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg} {
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`