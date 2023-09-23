import styled from "styled-components";
import { Link } from "react-router-dom";
import {device} from "../../components/devices"

export const Container = styled.div`
    max-width: 1440px;
    margin: auto;
`
export const Title = styled.div`
	padding: 2rem 0 1rem  0;
	text-align: center;
`;
export const TextSapn = styled.span`
    font-weight: bolder;
    text-align: center;
    background: linear-gradient(180deg, #00BEEE 0%, #0087D1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`
export const TextSapn1 = styled.span`
    font-weight: bolder;
    letter-spacing: normal;
    font-size: 20px;
    text-align: center;
    background: linear-gradient(180deg, #00BEEE 0%, #0087D1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    @media ${device.mobile} {
        font-size: 24px;
        letter-spacing: normal;
    }
`
export const TextSpan2 = styled.span`
    color: #B1B3B4;
`
export const TextSpanNoCss = styled.span`
    font-weight: bolder;
    text-align: center;
`
export const LinkTag = styled(Link)`
    text-decoration: none;
`
// Modal CSS
export const ModalWindow = styled.div`
    position: fixed;
    z-index: 29;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
    background-color: #79797979;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const ModalBG = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #79797979;
`;
export const ModalContainer = styled.div`
    position: absolute;
    z-index: 19;
    display: flex;
    flex-direction: row;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 500px){
        flex-direction: column;
        justify-content: center;
    }
`
export const ModalWrap = styled.div`
    background: linear-gradient(180deg, #00BEEE 0%, #0087D1 100%);
    box-shadow: 15px 15px 40px rgba(0, 0, 0, 0.25), inset 8px 8px 8px rgba(255, 255, 255, 0.5);
    border-radius: 32px;
    padding: 10%;
    width: 500px;
    @media ${device.mobile} {
        width: 320px;
    }
`
export const ModalBody = styled.div`
    & > .success-title {
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #FFFFFF;
    }
    & > .success-subtitle {
        padding-top: 10px;
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #FFFFFF;
    }
    & > .error-title {
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #ffff00;
    }
    & > .error-subtitle {
        padding-top: 10px;
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #ffff00;
    }
`
export const ModalHeader = styled.div``
export const ModalFooter = styled.div`
    text-align: center;
    & > img {
        width: 50px;
        heigh: 50px;
        margin-top: 24px;
    }
    & > button {
        position: absolute;
        bottom: 24px;
        right: 36px;
        cursor: pointer;
        background: linear-gradient(180deg, #00BEEE 0%, #0087D1 100%);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25), inset 2px 2px 14px rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        text-align: center;
        letter-spacing: 0.15em;
        color: #FFFFFF;
        border: none;
        padding: 5px 12px;
    }
`