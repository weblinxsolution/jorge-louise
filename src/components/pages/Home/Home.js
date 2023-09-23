import React from "react";
import { Link } from "react-router-dom";
import { Button2, ButtonStyle2, ButtonLink2 } from "../../UI_components/Buttons";
import { HomeContainer, HomeMenu, HomeMenuContainer, SocialMediaIconDiv, SocialMediaIconDivSpan } from "./HomeStyles";
const TwitterLogo = "/assets/twitter-logo.png";
const DiscordLogo = "/assets/discord-logo.png";
const SubsocialLogo = "/assets/subsocial-logo.png";

export const Home = (props) => {

	return (
		<HomeContainer>
			<HomeMenu>
				<HomeMenuContainer>
					{/* <Button2 name={"PLAY"} linkTo={""} account={true} /> */}
					<ButtonStyle2 onClick={() => { alert("Coming soon ...") }}>
						<ButtonLink2 to={''}>PLAY</ButtonLink2>
					</ButtonStyle2>
					<Button2 name={"INVENTORY"} linkTo={"/profile"} account={true} />
					<Button2 name={"HATCH EGG"} linkTo={"/hatch"} account={true} />
					<Button2 name={"MARKETPLACE"} linkTo={"/marketplace"} account={true} />
				</HomeMenuContainer>
			</HomeMenu>
			<SocialMediaIconDiv>
				<SocialMediaIconDivSpan>
					<a href="https://twitter.com/collection_ku" target='_blank' rel="noreferrer">
						<img src={TwitterLogo} alt="twitter-logo" />
					</a>
				</SocialMediaIconDivSpan>
				<SocialMediaIconDivSpan>
					<a href="https://discord.gg/75DBJ48D8y" target='_blank' rel="noreferrer">
						<img src={DiscordLogo} alt="discord-logo" />
					</a>
				</SocialMediaIconDivSpan>
				<SocialMediaIconDivSpan>
					<a href="https://polkaverse.com/accounts/3qMPr9ttP6bjERP1Uk6iC8yEio51p7uWrvK66HUpwiYbCJzx" target='_blank' rel="noreferrer">
						<img src={SubsocialLogo} alt="polkaverse-logo" />
					</a>
				</SocialMediaIconDivSpan>
			</SocialMediaIconDiv>
		</HomeContainer>
	);
};
