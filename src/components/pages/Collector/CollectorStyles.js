import styled from "styled-components";
import { device } from "../../devices";

export const MintContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.mobile} {
        padding: 0 5px;
    }
`;
export const MintWraper = styled.div`
    position: relative;
`
export const MintTitle = styled.div`
    width: 100%;
    padding: 10px 20px 20px 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 3px;
    color: #FFFFFF;
    & > .c-block {
        display: block;
    }
    & > .c-inline {
        @media ${device.mobile} {
            display: block;
        }
    }
`
export const MintCardContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;

    @media ${device.mobile}{
        display: block;
        text-align: center;
        text-align: -moz-center;
        text-align: -webkit-center;
    }
`;
export const MintBackground = styled.div`
    position: absolute;
    background: linear-gradient(180deg, #00BEEE 0%, #0087D1 100%);
    box-shadow: inset 8px 8px 8px rgba(255, 255, 255, 0.5);
    border-radius: 60px;
    z-index: -1;
    height: 100%;
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    width: 100%;
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
    top: 40px;
`
export const MintBackground1 = styled.div`
    background: linear-gradient(180deg, #00BEEE 0%, #0087D1 100%);
    box-shadow: inset 8px 8px 8px rgba(255, 255, 255, 0.5);
    border-radius: 60px;
    z-index: -1;
    height: 100%;
    height: -moz-available;          /* WebKit-based browsers will ignore this. */
    height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    height: fill-available;
    width: 100%;
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
    max-width: 450px;
    padding: 12px;
`