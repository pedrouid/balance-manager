import React from "react";
import styled from "styled-components";
import lang from "../languages";
import { capitalize } from "../helpers/utilities";

import MetamaskLogo from "../components/MetamaskLogo";
import LedgerLogo from "../components/LedgerLogo";
import TrezorLogo from "../components/TrezorLogo";

import Button from "../components/Button";

import { StyledParagraph, StyledActions } from "./modalStyles";

export const StyledApproveTransaction = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    margin-top: 15px;
  }
  & > p {
    margin-top: 32px;
  }
`;

const ApproveTransactionModal = ({ accountType, onClose }) => (
  <StyledApproveTransaction>
    {(() => {
      switch (accountType) {
        case "METAMASK":
          return <MetamaskLogo />;
        case "LEDGER":
          return <LedgerLogo />;
        case "TREZOR":
          return <TrezorLogo />;
        default:
          return <div />;
      }
    })()}

    <StyledParagraph>
      {lang.t("modal.approve_tx", {
        walletType: capitalize(accountType)
      })}
    </StyledParagraph>

    <StyledActions single>
      <Button onClick={onClose}>{lang.t("button.close")}</Button>
    </StyledActions>
  </StyledApproveTransaction>
);

export default ApproveTransactionModal;
