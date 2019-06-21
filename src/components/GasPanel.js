import React from "react";
import styled from "styled-components";
import GasPriceLineBreak from "./GasPriceLineBreak";
import GasButton from "./GasButton";
import { colors } from "../styles";

export const StyledGasOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;

  & button {
    background-color: transparent;
    box-shadow: none;
    color: rgb(${colors.darkGrey});
    min-height: 64px;
    margin: 0;
    border-radius: 0;

    &:hover,
    &:active,
    &:focus {
      box-shadow: none !important;
      outline: none !important;
      background-color: transparent !important;
      color: rgb(${colors.darkGrey}) !important;
    }
  }
`;

// Not fully looking the same as before
const GasPanel = ({ gasPriceOption, gasPrices, updateGasPrice }) => (
  <span>
    <GasPriceLineBreak gasPriceOption={gasPriceOption} />
    <StyledGasOptions>
      <GasButton
        gasPrice={gasPrices.slow}
        speed={`slow`}
        onClick={updateGasPrice}
      />
      <GasButton
        gasPrice={gasPrices.average}
        speed={`average`}
        onClick={updateGasPrice}
      />
      <GasButton
        gasPrice={gasPrices.fast}
        speed={`fast`}
        onClick={updateGasPrice}
      />
    </StyledGasOptions>
  </span>
);

export default GasPanel;
