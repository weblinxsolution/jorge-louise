import React from "react";
import styled from "styled-components";
import { Title, TextSapn1 } from "../../styles/Common";
import { MarketPlaceComponent } from "./MarketPlaceComponent";
import { MIcons1, MIcons2, MIcons3, MIcons4, MarkeSocialIcons } from "./MarketplaceStyles";

export const MarketPlace = (props) => {
	return (
		<div style={{margin:'0px auto'}}>
			{/* <hr style={{ width: 400, margin: 'auto', border: '1px solid #DCDCDC' }} /> */}
			<Title>
				<TextSapn1>Marketplace</TextSapn1>
			</Title>
			{/* <div style={{textAlign: 'center'}}><img src="/images/lock.png" alt="" /></div> */}
			<MarkeSocialIcons>
				<MIcons1/>
				<MIcons2/>
				<MIcons3/>
				<MIcons4/>
			</MarkeSocialIcons>
			<MarketPlaceComponent collection={'all'} {...props} />
		</div>
	);
};
