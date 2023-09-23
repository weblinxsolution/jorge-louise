import React, { useState, useEffect } from "react";
import { MintCardDiv, MintCardH1, MintCardH2, MintCardP, MintCardStyle, MintCardStyleL, MintCardStyleR, MintAvatar } from "../../UI_components/MintCard";
import { MintContainer, MintCardContainer, MintBackground, MintWraper, MintTitle } from "../Collector/CollectorStyles";
import { MintButtonStyle } from "../../UI_components/Buttons";
import axios from "axios";
import { useWeb3React } from '@web3-react/core';
import { ba_mintPrice, ba_mintToken, ba_Supply, toWei } from '../../../utils/contracts';
import { MarketPlaceComponent } from '../MarketPlace/MarketPlaceComponent';
import { Title, TextSapn1 } from '../../styles/Common';
import { getContractInfo } from '../../../utils/index';
import { SuccessModal } from '../../UI_components/ModalSuccess';
import { ErrorModal } from '../../UI_components/ModalError';

export const Backpack = (props) => {
	const { account, chainId, library } = useWeb3React();
	const [baPrice, setBaPrice] = useState(0);
	const [baClassicSupply, setBaClassicSupply] = useState(0);
	const [baSpecialSupply, setBaSpecialSupply] = useState(0);
	const [baFounderSupply, setBaFounderSupply] = useState(0);
	const [isMinting1, setIsMinting1] = useState(false);
	const [isMinting2, setIsMinting2] = useState(false);
	const [isMinting3, setIsMinting3] = useState(false);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errMsg, setErrMsg] = useState("Please check your wallet validation!");
	const onCloseSuccessModal = () => { setIsSuccess(false); window.location.href = '/profile'; }
	const onCloseErrorModal = () => { setIsError(false); }

	const contractInfo = getContractInfo("BackpackNFT");
	const fetchData = async () => {
		if (chainId && library) {
			let _mintPrice = await ba_mintPrice(chainId, library.getSigner());
			if (_mintPrice) setBaPrice(parseFloat(_mintPrice));
			let baRes = await ba_Supply(chainId, library.getSigner());
			if (baRes != null) {
				setBaClassicSupply(parseInt(baRes.classicCount));
				setBaSpecialSupply(parseInt(baRes.specialCount) - 1000);
				setBaFounderSupply(parseInt(baRes.founderCount) - 2000);
			}
		}
	}
	useEffect(() => {
		fetchData();
	}, [chainId]);
	const mintBackpack = async (model) => {
		if (account && chainId && library) {
			let _fee = toWei(baPrice);
			if (model === 1) setIsMinting1(true);
			else if (model === 2) setIsMinting2(true);
			else setIsMinting3(true);
			ba_mintToken(model, _fee, chainId, library.getSigner()).then(res => {
				if (res.code) { setIsSuccess(true); }
				else { setErrMsg(res.message); setIsError(true); }
				if (model === 1) setIsMinting1(false);
				else if (model === 2) setIsMinting2(false);
				else setIsMinting3(false);
			}).catch(e => {
				console.log(e);
				setErrMsg(e.message); setIsError(true);
				if (model === 1) setIsMinting1(false);
				else if (model === 2) setIsMinting2(false);
				else setIsMinting3(false);
			})
		}
	}
	return (
		<MintContainer>
			<SuccessModal
				isOpen={isSuccess}
				onClose={onCloseSuccessModal}
				title="Your Backpack has been delivered!"
				subtitle="Please check your inventor."
			/>
			<ErrorModal
				isOpen={isError}
				onClose={onCloseErrorModal}
				title="Failed to mint!"
				subtitle={errMsg}
			/>
			<hr style={{ width: 400, margin: 'auto', border: '1px solid #DCDCDC' }} />
			<Title>
				<TextSapn1>BACKPACK</TextSapn1>
			</Title>
			{/* <img src="/images/lock.png" alt="" /> */}
			<MintWraper>
				<MintBackground />
				<MintCardContainer>
					<MintCardStyleL>
						<MintCardDiv>
							<MintAvatar style={{ backgroundImage: `url(/assets/m_classic.svg)` }} />
						</MintCardDiv>
						<MintCardH1>CLASSIC</MintCardH1>
						<MintCardH2>1 MOVR</MintCardH2>
						{isMinting1 ?
							<MintButtonStyle>MINTING...</MintButtonStyle>
							: <MintButtonStyle onClick={() => alert("Coming soon ...")}>MINT</MintButtonStyle>}
						{/* <MintButtonStyle onClick={() => mintBackpack(1)}>MINT</MintButtonStyle> */}
						<MintCardP>SUPPLY: {baClassicSupply} / 1000</MintCardP>
					</MintCardStyleL>

					<MintCardStyle>
						<MintCardDiv>
							<MintAvatar style={{ backgroundImage: `url(/assets/m_special.svg)` }} />
						</MintCardDiv>
						<MintCardH1>SPECIAL</MintCardH1>
						<MintCardH2>1 MOVR</MintCardH2>
						{isMinting2 ?
							<MintButtonStyle>MINTING...</MintButtonStyle>
							: <MintButtonStyle onClick={() => alert("Coming soon ...")}>MINT</MintButtonStyle>}
						{/* <MintButtonStyle onClick={() => mintBackpack(2)}>MINT</MintButtonStyle> */}
						<MintCardP>SUPPLY: {baSpecialSupply} / 1000</MintCardP>
					</MintCardStyle>

					<MintCardStyleR>
						<MintCardDiv>
							<MintAvatar style={{ backgroundImage: `url(/assets/m_founder.svg)` }} />
						</MintCardDiv>
						<MintCardH1>FOUNDER</MintCardH1>
						<MintCardH2>1 MOVR</MintCardH2>
						{isMinting3 ?
							<MintButtonStyle>MINTING...</MintButtonStyle>
							: <MintButtonStyle onClick={() => alert("Coming soon ...")}>MINT</MintButtonStyle>}
						{/* <MintButtonStyle onClick={() => mintBackpack(3)}>MINT</MintButtonStyle> */}
						<MintCardP>SUPPLY: {baFounderSupply} / 1000</MintCardP>
					</MintCardStyleR>
				</MintCardContainer>
				<MintTitle>
					<span className="c-inline">YOUR EXPANDED </span>
					<span className="c-inline">KU VERSE INVENTORY.</span>
				</MintTitle>
			</MintWraper>

			<MarketPlaceComponent collection={contractInfo.address} {...props} />
		</MintContainer>
	);
};
