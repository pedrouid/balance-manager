import React from "react";
import styled from "styled-components";
import lang from "../languages";
import Button from "./Button";

const StyledGasButton = styled(Button)`
  min-height: 54px;
  width: 100%;

  & p {
    line-height: 20px;
    margin-top: 2px;
  }

  & p:first-child {
    font-weight: 500;
  }

  & p:last-child {
    font-weight: 400;
    font-size: 12px;
  }

  &:hover,
  &:active,
  &:focus,
  &:disabled {
    outline: none !important;
    box-shadow: none !important;
  }
`;

const GasButton = ({ gasPrice, speed, onClick }) => (
  <StyledGasButton dark disabled={!gasPrice} onClick={() => onClick(speed)}>
    <p>{`${lang.t(`modal.gas_${speed}`)}: ${
      gasPrice && gasPrice.txFee.native
        ? gasPrice.txFee.native.value.display
        : "$0.00"
    }`}</p>
    <p>{`~ ${gasPrice ? gasPrice.estimatedTime.display : "0 secs"}`}</p>
  </StyledGasButton>
);

export default GasButton;
