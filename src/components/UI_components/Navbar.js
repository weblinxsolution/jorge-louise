import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from '@web3-react/core'
import { shorter } from "../../utils";
import { Button1, ButtonDiv, ButtonStyle1 } from "./Buttons";
import {
	BackpackOp, CollectorOp, CompanyLogoImg, ContainerNavbar, Hamburger, ItemsOp, KoreOp, KuOp, Line, LowerNavbar, NavbarDiv, NavbarImg, NavbarItemDiv,
	NavbarItemDivC1, NavbarItemDivC6, ToggleMenu, ToggleMenuItem, UpperNavbar, UpperNavbarMenu, UpperNavbarRight, VerseOp
} from "../styles/NavbarStyles";
const CompanyLogo = "/assets/kuverse-logo.svg";
const BirdLogo = "/assets/bird-logo.png";

export const Navbar = (props) => {
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
			{showLowerMenu && <LowerNavbar>
				<NavbarDiv>
					<CompanyLogoImg src={CompanyLogo} onClick={LogoHandler} />
					<NavbarItemDivC1 onClick={() => onClickNav("collector")}>
						<CollectorOp activeCollector={menuText === 'collector' ? true : false}>COLLECTOR</CollectorOp>
					</NavbarItemDivC1>
					<NavbarItemDiv onClick={() => onClickNav("ku")}>
						<KuOp activeKu={menuText === 'ku' ? true : false}>KU</KuOp>
					</NavbarItemDiv>
					<NavbarItemDiv onClick={() => onClickNav("backpack")}>
						<BackpackOp activeBackpack={menuText === 'backpack' ? true : false}>BACKPACK</BackpackOp>
					</NavbarItemDiv>
					{/* <NavbarImg src={BirdLogo} onClick={BirdHandler} activeBird={menuText === 'bird' ? true : false} /> */}
					<NavbarItemDiv onClick={() => onClickNav("items")}>
						<ItemsOp activeItems={menuText === 'items' ? true : false}>ITEMS</ItemsOp>
					</NavbarItemDiv>
					<NavbarItemDiv onClick={() => onClickNav("kore")}>
						<KoreOp activeKore={menuText === 'kore' ? true : false} >kORE</KoreOp>
					</NavbarItemDiv>
					<NavbarItemDivC6 onClick={() => onClickNav("verse")}>
						<VerseOp activeVerse={menuText === 'verse' ? true : false}>VERSE</VerseOp>
					</NavbarItemDivC6>
					<NavbarItemDivC6 onClick={() => onClickNav("home")}>
						<VerseOp activeVerse={menuText === 'home' ? true : false} to="/home" active={menuText === "home" ? 1 : 0} onClick={() => onClickNav("home")}>HOME</VerseOp>
					</NavbarItemDivC6>
					<NavbarItemDivC6 onClick={() => onClickNav("marketstats")}>
					<VerseOp activeVerse={menuText === 'marketstats' ? true : false} to="/marketstats" active={menuText === "marketstats" ? 1 : 0} onClick={() => onClickNav("marketstats")}>MARKET STATS</VerseOp>
					</NavbarItemDivC6>
					<NavbarItemDivC6 onClick={() => onClickNav("about")}>
						<VerseOp activeVerse={menuText === 'about' ? true : false} to="/about" active={menuText === "about" ? 1 : 0} onClick={() => onClickNav("about")} >ABOUT</VerseOp>
					</NavbarItemDivC6>
				</NavbarDiv>
			</LowerNavbar>}
			{/* <UpperNavbar>
				<UpperNavbarRight>
					<UpperNavbarMenu>
						{showNavMenuAfter && (
							<ToggleMenu>
							</ToggleMenu>
						)}

						<Hamburger onClick={onClickMenu}>
							<Line showNavMenu={showNavMenu}></Line>
							<Line showNavMenu={showNavMenu}></Line>
							<Line showNavMenu={showNavMenu}></Line>
						</Hamburger>
					</UpperNavbarMenu>
					<div>
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
					</div>
				</UpperNavbarRight>
			</UpperNavbar> */}


		</ContainerNavbar>
	);
};
