import { css } from "styled-components";

/* ------------------------------ common styles ----------------------------- */

export const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`;

export const resetBoxModel = css`
  margin: 0;
  border: 0;
  padding: 0;
`;

export const resetList = css`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const ellipsis = css`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  /* height: 3.2em; */
`;

export const themeColor = "#fff";
export const boxShadow = css`
  box-shadow: 0 1px 3px #88888850;
`;

export const textShadow = css`
  text-shadow: 0 1px 3px #88888825;
`;

export const museoLarge = css`
  font: 700 2.4rem "MuseoModerno", serif;
`;

export const museoMedium = css`
  font: 400 1.6rem "MuseoModerno", serif;
`;
