import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import { shorter } from "../../utils";
import { Button1, ButtonDiv, ButtonStyle1 } from "./Buttons";
import {
    BackpackOp, CollectorOp, CompanyLogoImg, ContainerNavbar, Hamburger, HeaderMenuBoxIcons, HeaderMenuIcon1, HeaderMenuIcon2, HeaderMenuIcon3, HeaderMenuIcon4, ItemsOp, KoreOp, KuOp, Line, LowerNavbar, NavbarDiv, NavbarImg, NavbarItemDiv,
    NavbarItemDivC1, NavbarItemDivC6, ToggleMenu, ToggleMenuItem, UpperNavbar, UpperNavbarMenu, UpperNavbarRight, VerseOp
} from "../styles/NavbarStyles";
import { FlyingWidget } from "./FlyingWidget";
const CompanyLogo = "/assets/kuverse-logo.svg";
const BirdLogo = "/assets/bird-logo.png";

export const HeaderMenu = (props) => {
    const { account } = useWeb3React();
    let navigate = useNavigate();
    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showNavMenuAfter, setShowNavMenuAfter] = useState(false);
    const [menuText, setMenuText] = useState("");
    const [showLowerMenu, setShowLowerMenu] = useState(true);

    const onClickMenu = () => {
        setShowNavMenu(!showNavMenu);
        if (showNavMenuAfter === false) {
            setTimeout(() => {
                setShowNavMenuAfter(true)
            }, 1000);
        }
        else setShowNavMenuAfter(false);
    };

    const BirdHandler = (e) => {
        e.preventDefault();
        navigate("/profile");
        setMenuText("bird");
    }

    const onClickNav = (navText) => {
        // e.preventDefault();
        navigate("/" + navText);
        setMenuText(navText);
    }

    const LogoHandler = (e) => {
        e.preventDefault();
        setMenuText("");
        navigate("/home")
    }

    useEffect(() => {
        setShowLowerMenu(true);
        let url = window.location.pathname;
        if (url.startsWith("/collector")) setMenuText("collector");
        else if (url.startsWith("/ku")) setMenuText("ku");
        else if (url.startsWith("/backpack")) setMenuText("backpack");
        else if (url.startsWith("/profile")) setMenuText("bird");
        else if (url.startsWith("/items")) setMenuText("items");
        else if (url.startsWith("/kore")) setMenuText("kore");
        else if (url.startsWith("/verse")) setMenuText("verse");
        else if (url.startsWith("/about")) {
            setMenuText("about");
            setShowNavMenu(true);
            setShowNavMenuAfter(true);
            setShowLowerMenu(false);
        }
        else if (url.startsWith("/marketstats")) {
            setMenuText("marketstats");
            setShowNavMenu(true);
            setShowNavMenuAfter(true);
        }
    }, [showLowerMenu, menuText]);

    return (
        <ContainerNavbar>

            <UpperNavbar>
                <UpperNavbarRight>
                    {/* <UpperNavbarMenu> */}
                    {/* {showNavMenuAfter && (
                            <ToggleMenu>
                            </ToggleMenu>
                        )} */}

                    {/* <Hamburger onClick={onClickMenu}>
                            <Line showNavMenu={showNavMenu}></Line>
                            <Line showNavMenu={showNavMenu}></Line>
                            <Line showNavMenu={showNavMenu}></Line>
                        </Hamburger> */}
                    {/* </UpperNavbarMenu> */}
                    {/* <div>

                        {account ? (
                            <ButtonDiv>
                                <ButtonStyle1 onClick={props.openLogoutModal}>{shorter(account)}</ButtonStyle1>
                            </ButtonDiv>
                        ) : (
                            <ButtonDiv onClick={props.connectAccount}>
                                <ButtonStyle1>CONNECT METAMASK</ButtonStyle1>
                            </ButtonDiv>
                        )}
                        {props?.kuWallet ? (
                            <ButtonDiv>
                                <ButtonStyle1 onClick={props.connectKusama}>{shorter(props.kuWallet.address)}</ButtonStyle1>
                            </ButtonDiv>
                        ) : (
                            <ButtonDiv onClick={props.connectKusama}>
                                <ButtonStyle1>CONNECT KUSAMA</ButtonStyle1>
                            </ButtonDiv>
                        )}
                    </div> */}
                    <HeaderMenuBoxIcons>
                        <HeaderMenuIcon1 />
                        {account ? (
                            <HeaderMenuIcon2 onClick={props.openLogoutModal} />
                        ) : (
                            <HeaderMenuIcon2 onClick={props.connectAccount} />
                        )}
                        <HeaderMenuIcon3 />
                        <HeaderMenuIcon4 />
                    </HeaderMenuBoxIcons>
                </UpperNavbarRight>
            </UpperNavbar>
        </ContainerNavbar>
    );
};
