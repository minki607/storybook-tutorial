// 예전에 진행했던 SUITS 프로젝트에서 가져온 버튼 컴포넌트
// https://github.com/TEAM-SUITS/Suits/blob/main/client/src/components/Button/Button.js

import React from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon/Icon.jsx";
import {
  museoMedium,
  textShadow,
  themeColor,
} from "../styles/common.styled.js";
import { string, node, bool } from "prop-types";
import { motion } from "framer-motion";

/* ---------------------------- styled components --------------------------- */

const StyledButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: ${({ $width }) => ($width ? $width : "auto")};
  height: ${({ $height }) => ($height ? $height : "auto")};
  ${museoMedium}
  ${textShadow};
  border: "1px solid #000";
  color: #000;
  background-color: ${themeColor};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 1em;
      padding: 0.825em;
    `};
`;

/* ------------------------------------------------------------------------- */

export default function Button({
  icon,
  rounded,
  children,
  width,
  height,
  isLoading,
  disabled,
  title,
  isMobile,
  ...restProps
}) {
  return (
    <StyledButton
      whileHover={isMobile ? null : { scale: 1.1 }}
      rounded={rounded}
      $width={width}
      $height={height}
      disabled={disabled}
      {...restProps}
    >
      {icon && <Icon type={icon} title={title} />}
      {isLoading ? "Loading..." : children}
    </StyledButton>
  );
}

/* -------------------------------- proptypes ------------------------------- */

Button.propTypes = {
  rounded: bool,
  children: node,
  icon: string,
  width: string,
  height: string,
  isLoading: bool,
  disabled: bool,
  title: string,
};
