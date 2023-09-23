import styled from "styled-components";
import {device} from '../../../components/devices'

export const MarketPlaceMintContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const MarketPlaceMpHeaderDiv = styled.div`
    padding: 10px 0;
`;
export const FilterContainer = styled.div`
    background: transparent;
    // box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 5px 10px;
    display: flex;
    flex-wrap:wrap;
    gap:10px;
    & > div {
        // margin: 3px 10px;
        text-align: center;
    }
    @media ${device.laptopS} {
        display: grid;
    }
`
export const FilterItem = styled.div`
    background: transparent;
    padding: 3px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 15px;
    border: 2px solid #EEE;
    color: #FFFFFF;
    & > span {
        padding: 0 1rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: normal;
    }
    &.active {
        background:#FFF;
        color:#000;
    }
`
export const MarkeSocialIcons = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:23px;
    justify-content:center;
    width:100%;
    padding:15px 0px;
`;
export const MIcons1 = styled.div`
    width:55px;
    height:55px;
    background-image:url('/icon1.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    `;
export const MIcons2 = styled.div`
    width:55px;
    height:55px;
    background-image:url('/icon2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
export const MIcons3 = styled.div`
    width:55px;
    height:55px;
    background-image:url('/icon3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
export const MIcons4 = styled.div`
    width:55px;
    height:55px;
    background-image:url('/icon4.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
export const MarketPlaceCollectorItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    padding: 25px;
    border: none;
    border-radius: 5px;
    margin-bottom: 4rem;
    
    @media ${device.laptopL} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.laptopS} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${device.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`;