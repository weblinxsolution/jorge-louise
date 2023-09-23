import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../devices";

export const Line1Open = keyframes`
    0% {transform: rotate(0deg)  translate3d(0, 0, 0);}
    40% {transform: rotate(90deg)  translate3d(13px, -13px, 0);}
    90% {transform: rotate(90deg)  translate3d(13px, -13px, 0);}
    100% {transform: rotate(98deg) translate3d(11px, -15px, 0);}
`;

export const Line1Close = keyframes`
    0% {transform: rotate(98deg) translate3d(11px, -15px, 0);}
    100% {transform: rotate(0deg) translate3d(0);}
`;

export const Line2Open = keyframes`
    0% {transform: rotate(0deg);}
    100% {transform: rotate(90deg);}
`;

export const Line2Close = keyframes`
    0% {transform: rotate(90deg);}
    100% {transform: rotate(0deg);}
`;

export const Line3Open = keyframes`
    0% {transform: rotate(0deg)  translate3d(0, 0, 0);}
    45% {transform: rotate(90deg) translate3d(-13px, 15px, 0);}
    60% {transform: rotate(150deg) translate3d(8px, 10px, 0);}
    75% {transform: rotate(210deg) translate3d(18px, 15px, 0);}
    90% {transform: rotate(270deg) translate3d(13px, -15px, 0);  }
    100% {transform: rotate(262deg) translate3d(15px, -12px, 0);  }
`;

export const Line3Close = keyframes`
    0% {transform: rotate(262deg) translate3d(15px, -12px, 0);  }
    100% {transform: rotate(360deg) translate3d(0,0,0);}
`;

export const ContainerNavbar = styled.div`
    width: 100%;
    display: flex;
    // border-radius: 0px 0px 25px 25px;
    background: linear-gradient(180deg, #008BD3 0%, #005A89 78.12%);
`;

export const UpperNavbar = styled.div`
    height: max-content;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid black;
    // border-bottom: 1px solid #e4e4e4;
    padding:15px 4rem;
    @media ${device.laptopS}{
        padding: 0 2rem;
    }
    @media ${device.tablet}{
        flex-direction: column;
        justify-content: center;
        height: fit-content;
        padding: 1rem;
    }
`;

export const CompanyLogoImg = styled.img`
    width:70%;
    display:block;
    margin:auto;
    margin-top:10%;
    margin-bottom:20%;
    &:hover{
        cursor: pointer;
    }
    @media ${device.laptopS} {
        width: 25%;
    }
    @media ${device.tablet} {
        width: max-content;
        margin-bottom: 2rem;
    }
`;

export const UpperNavbarMenu = styled.div`
    width: 30rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 2%;
    @media ${device.tablet} {
        padding-bottom: 1rem;
        width: 18rem;
    }
`;

export const UpperNavbarRight = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    @media ${device.mobile}{
        flex-direction: column;
        justify-content: center;
    }
`;

export const LowerNavbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0px auto;
    @media ${device.tablet}{
        margin: 2rem 0;
    }
    @media ${device.mobile}{
        margin: 0;
    }
`;
export const NavbarFlex = styled.div`
    width:75%;
`;

export const Navbarbox = styled.div`
    display:flex;
    width:25%;
    min-height: 100vh;
`;
export const NavbarContentBox = styled.div`
    width:100%;
    display:flex;
 `;

export const NavbarContent = styled.div`
    width:60%;
    // height:100vh;
`;

export const MarketPlaceContainer = styled.div`
    display:flex;
    width:40%;
    // height:100vh;
    background-color:transparent;
    border-left:1px solid #6A6A6A;  
`;
export const NavbarContainer = styled.div`
    display:flex;
    width:100%;
`;
export const HeaderMenuBoxIcons = styled.div`
    display:flex;
    width:100%;
    gap:25px;
    justify-content:end;
    & > div{
        cursor:pointer;
        width:30px;
        height:30px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;    
    }
`;
export const HeaderMenuIcon1 = styled.div`
    background-image: url(/h1icon.png);
`;
export const HeaderMenuIcon2 = styled.div`
    background-image: url(/h2icon.png);
`;
export const HeaderMenuIcon3 = styled.div`
    background-image: url(/h3icon.png);
`;
export const HeaderMenuIcon4 = styled.div`
    background-image: url(/h4icon.png);
`;

export const NavbarDiv = styled.div`
    width: 80%;
    height: max-content;
    // padding: 0 1rem;
    align-items: center;
    overflow-x: hidden;
    overflow-x: visible;
    @media (max-width: 1300px){
        transform: scale(0.9);
    }
    @media (max-width: 1200px){
        transform: scale(0.8);
    }
    @media ${device.laptopS}{
        transform: scale(1);
        height: 7rem;
        padding: 0 10px;
    }
    @media ${device.tablet}{
        height: 5rem;
        padding: 0 5px;
    }
    @media (max-width:751px){
        transform: scale(0.8);
    }
    @media (max-width:651px){
        transform: scale(0.7);
    }
    @media ${device.mobile}{
        height: max-content;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
        border-radius: 0;
        box-shadow: none;
    }
    @media ${device.mobileS}{
        gap: 5px;
    }
`;

export const FlyingWidgetBox = styled.div`
    width:max-content;
    position:fixed;
    <left:42></left:42>%;
    bottom:13px;
    border-radius: 45px 23px 36.5px 36.5px;
    background: var(--dark, #404040);
    display:flex;
    align-items:center;
    gap:30px;
    padding:15px 40px;
    & > div{
        cursor:pointer;
        width:35px;
        height:35px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;  
        position:relative;  
    }
`;
export const FlyingWidgetItem1 = styled.div`
    background-image: url(/flying1.png);
`;
export const FlyingWidgetItem2 = styled.div`
    background-image: url(/flying2.png);
`;
export const FlyingWidgetItem3 = styled.div`
    background-image: url(/flying3.png);    
`;
export const FlyingWidgetItem4Box = styled.div`
`;
export const FlyingWidgetItem4 = styled.span`
    display: block;
    background-image: url(/flying4.png);
    background-size: 85% !important;
    width: 80px !important;
    height: 80px !important;
    position: relative;
    background-color: #404040;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -30px;
`;

export const ToggleMenu = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ToggleMenuItem = styled(Link)`
    font-size: 13px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.25em;
    // color: #00BEEE;
    color: ${({ active }) => active ? css`lightblue` : css`#00BEEE`};
    text-decoration: none;
    margin: 0 1rem;
    vertical-align: middle;
    @media ${device.laptopS} { 
        margin: 0 10px;
    }
`;

export const NavbarItemDiv = styled.div`
    // box-shadow: 4px 4px 6px #2b496c, -2px -2px 2px -1px #ffffff;
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 0 5px;
    margin-bottom:20px;
    border-radius: 27px;
    overflow: hidden;
    cursor: pointer;
    @media ${device.laptopS}{
        height: 5rem;
        width: 9rem;
    }
    @media ${device.tablet}{
        width: 8rem;
        height: 4.5rem;
        margin: 0 2px;
    }
    @media ${device.mobile}{
        width: 6rem;
        margin: 0;
    }
`;

export const NavbarItemDivC1 = styled(NavbarItemDiv)`
    cursor: pointer;
    @media ${device.mobile}{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    `;

export const NavbarItemDivC6 = styled(NavbarItemDiv)`
    @media ${device.mobile}{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const NavbarImg = styled.img`
    margin-left: 5px;
    height: 180px;
    width: 180px;
    &:hover{
        cursor: pointer;
    }
    @media ${device.laptopS}{
        height: 100px;
        width: 100px;
        margin-left: 0;
    }
    @media ${device.mobile}{
        display: none;
    }
`;

export const NavBarMenuItems = styled.p`
    background: linear-gradient(180deg, #008BD3 0%, #00476E 100%);
    width: 100%;
    padding: 12px 0;
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.15em;
    text-align: center;
    color: #FFF;
    @media ${device.laptopS}{
        font-size: 14px;
    }
    @media ${device.tablet}{
        font-size: 12px;
        letter-spacing: 0.1em;
    }
`;

export const CollectorOp = styled(NavBarMenuItems)`
	background:  ${({ activeCollector }) =>
        activeCollector
            ? css`
			linear-gradient(180deg, #BDF1FE 0%, #73C7F5 100%)
			`
            : null};
	box-shadow: ${({ activeCollector }) =>
        activeCollector
            ? css`
			inset 4px 4px 10px rgba(0, 2, 52, 0.3) !important
			`
            : null};
`;

export const KuOp = styled(NavBarMenuItems)`
	background:  ${({ activeKu }) =>
        activeKu
            ? css`
			linear-gradient(180deg, #BDF1FE 0%, #73C7F5 100%)
			`
            : css`
			linear-gradient(180deg, #008BD3 0%, #00476E 100%);
			`};
	box-shadow: ${({ activeKu }) =>
        activeKu
            ? css`
			inset 4px 4px 10px rgba(0, 2, 52, 0.3) !important
			`
            : null};
`;

export const BackpackOp = styled(NavBarMenuItems)`
	background:  ${({ activeBackpack }) =>
        activeBackpack
            ? css`
			linear-gradient(180deg, #BDF1FE 0%, #73C7F5 100%)
			`
            : css`
			linear-gradient(180deg, #008BD3 0%, #00476E 100%);
			`};
	box-shadow: ${({ activeBackpack }) =>
        activeBackpack
            ? css`
			inset 4px 4px 10px rgba(0, 2, 52, 0.3) !important
			`
            : null};
`;

export const ItemsOp = styled(NavBarMenuItems)`
	background:  ${({ activeItems }) =>
        activeItems
            ? css`
			linear-gradient(180deg, #BDF1FE 0%, #73C7F5 100%)
			`
            : css`
			linear-gradient(180deg, #008BD3 0%, #00476E 100%);
			`};
			box-shadow: ${({ activeItems }) =>
        activeItems
            ? css`
			inset 4px 4px 10px rgba(0, 2, 52, 0.3) !important
			`
            : null};
`;

export const KoreOp = styled(NavBarMenuItems)`
	background:  ${({ activeKore }) =>
        activeKore
            ? css`
			linear-gradient(180deg, #BDF1FE 0%, #73C7F5 100%)
			`
            : css`
			linear-gradient(180deg, #008BD3 0%, #00476E 100%);
			`};
	box-shadow: ${({ activeKore }) =>
        activeKore
            ? css`
			inset 4px 4px 10px rgba(0, 2, 52, 0.3) !important
			`
            : null};
`;

export const VerseOp = styled(NavBarMenuItems)`
	background:  ${({ activeVerse }) =>
        activeVerse
            ? css`
			linear-gradient(180deg, #BDF1FE 0%, #73C7F5 100%)
			`
            : css`
			linear-gradient(180deg, #008BD3 0%, #00476E 100%);
			`};
	box-shadow: ${({ activeVerse }) =>
        activeVerse
            ? css`
			inset 4px 4px 10px rgba(0, 2, 52, 0.3) !important
			`
            : null};
`;

export const Hamburger = styled.div`
	margin-left: 2rem;
	&:hover {
		cursor: pointer;
	}
	@media ${device.laptopS}{
		margin-left: 0;
	}
	@media ${device.mobile}{
		margin-left: 0;
		transform: scale(0.65);
	}
`;

export const Line = styled.div`
	width: 50px;
	height: 5px;
	background: linear-gradient(180deg, #008BD3 0%, #00476E 100%);;
	margin: 8px auto;
	border-radius: 20px;
	&:nth-child(1){
		animation: ${({ showNavMenu }) =>
        showNavMenu
            ? css`
        ${Line1Open} 0.8s linear forwards
        `
            : css`
        ${Line1Close} 0.5s linear forwards
        `};
	}
	&:nth-child(2){
		animation: ${({ showNavMenu }) =>
        showNavMenu
            ? css`
        ${Line2Open} 0.5s linear forwards
        `
            : css`
        ${Line2Close} 0.5s linear forwards
    	`};
	}
	&:nth-child(3){
		animation: ${({ showNavMenu }) =>
        showNavMenu
            ? css`
          ${Line3Open} 0.8s linear forwards
        `
            : css`
          ${Line3Close} 0.5s linear forwards
        `};
	}
`;