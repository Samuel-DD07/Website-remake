import styled from "styled-components";

export default function Login(){
    return (
        <Container>
            <Content>
                <BlockImage>
                    <Logo1 src="/assets/cta-logo-one.svg" alt=""/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                    Denique Antiochensis ordinis vertices sub uno elogio iussit occidi ideo efferatus, quod ei celebrari vilitatem intempestivam urgenti, cum inpenderet inopia, gravius rationabili responderunt; et perissent ad unum ni comes orientis tunc Honoratus fixa constantia restitisset.
                    </Description>
                    <Logo2 src="/assets/cta-logo-two.png" alt=""/>
                </BlockImage>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    heigth: 100vh;
`

const Content = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 80px 40px;
`

const BgImage = styled.div`
    height: 100vh;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/assets/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const BlockImage= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 80%;
    transition: opacity 0.5s;
`

const Logo1= styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-heigth: 1px;
    display: block;
    width: 100%;
`

const SignUp= styled.a`
    font-weight: bold;
    color: #F9F9F9;
    text-align: center;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spancing; 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.h2`
    text-align: center;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-weight: 100;
`

const Logo2= styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-heigth: 10px;
    display: block;
    width: 100%;
`