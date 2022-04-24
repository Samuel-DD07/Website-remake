import styled from "styled-components";

export default function Header(props){
    return (
        <Nav>
            <Logo>
                <img src="/assets/logo.svg" alt=""/>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/assets/home-icon.svg" alt="Home"/>
                </a>
                <span>Home</span>
            </NavMenu>
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
    }

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
        padding: 2px 0px;
        white-spacing: nowrap;
        position: relative;
    }

    &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0px;
        boder-radius: 0px 0px 4px 4px;
        transform-orgin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45)
    }

    // @media (max-width: 768px){
    //     display: none;
    // }
`