import React from "react";
import { ClickAwayListener, Fade, Grow } from "@material-ui/core";
import { StyledModalOverlay, StyledModalWrapper } from "./PiModal.style";

export default function PiModal({ children, isOpen, handleClose }) {
  if (!isOpen) {
    return <></>;
  }

  return (
    <Fade in>
      <StyledModalOverlay>
        <Grow in>
          <ClickAwayListener onClickAway={() => handleClose()}>
            <StyledModalWrapper>{children}</StyledModalWrapper>
          </ClickAwayListener>
        </Grow>
      </StyledModalOverlay>
    </Fade>
  );
}
