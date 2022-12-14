import React from "react";
import { oneOf, string } from "prop-types";
import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as Home } from "./images/home.svg";
import { ReactComponent as Heart } from "./images/heart.svg";
import { ReactComponent as HeartActive } from "./images/heart-active.svg";
import { ReactComponent as Profile } from "./images/profile.svg";
import { ReactComponent as ProfileActive } from "./images/profile-active.svg";
import { ReactComponent as Info } from "./images/info.svg";
import { ReactComponent as InfoActive } from "./images/info-active.svg";
import { ReactComponent as Error } from "./images/error.svg";
import { ReactComponent as Success } from "./images/success.svg";
import { ReactComponent as Github } from "./images/github.svg";
import { ReactComponent as Logo } from "./images/logo.svg";

/* -------------------------------------------------------------------------- */

export default function Icon({
  type,
  title = type,
  height = "25px",
  ...restProps
}) {
  let COMP = null;
  switch (type) {
    case "logo":
      COMP = Logo;
      break;
    case "search":
      COMP = Search;
      break;

    case "home":
      COMP = Home;
      break;

    case "heart":
      COMP = Heart;
      break;
    case "heart-active":
      COMP = HeartActive;
      break;
    case "profile":
      COMP = Profile;
      break;
    case "profile-active":
      COMP = ProfileActive;
      break;
    case "info":
      COMP = Info;
      break;
    case "info-active":
      COMP = InfoActive;
      break;

    case "error":
      COMP = Error;
      break;
    case "success":
      COMP = Success;
      break;
    case "github":
      COMP = Github;
      break;

    default:
      throw new Error("아이콘을 찾을수없습니다");
  }

  return <COMP title={type === title} height={height} {...restProps} />;
}

Icon.propTypes = {
  type: oneOf([
    "logo",
    "search",
    "home",
    "heart",
    "profile",
    "info",
    "profile-active",
    "info-active",
    "heart-active",
    "home-active",
    "search-active",
    "quote-left",
    "quote-right",
    "close",
    "error",
    "success",
    "github",
    "mail",
    "refresh",
    "night",
    "arrow",
  ]).isRequired,
  title: string,
  height: string,
};
