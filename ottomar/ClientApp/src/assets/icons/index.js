import styled from "styled-components";

import { GrFacebookOption } from "react-icons/gr";
import {
  MdOutlineLocalPostOffice,
  MdOutlinePhotoSizeSelectActual,
} from "react-icons/md";
import { HiPhone, HiMenu } from "react-icons/hi";
import { FaBriefcase, FaRegNewspaper, FaPhoneSquareAlt } from "react-icons/fa";
import { TiThList } from "react-icons/ti";
import { BsChevronDown } from "react-icons/bs";
import { TbMap2 } from "react-icons/tb";
import { BsPhone } from "react-icons/bs";
import { RiArrowRightSFill } from "react-icons/ri";

export const FacebookIcon = styled(GrFacebookOption)`
  font-size: 14px;
  fill: #354a6b;

  margin-right: 5px;
`;

export const OutlinePostOfficeIcon = styled(MdOutlineLocalPostOffice)`
  font-size: 14px;
  fill: #354a6b;

  margin-right: 5px;
`;

export const PhoneIcon = styled(HiPhone)`
  font-size: 14px;
  fill: #354a6b;
`;

export const BriefcaseIcon = styled(FaBriefcase)`
  font-size: 14px;
  fill: #000;
`;

export const ThListIcon = styled(TiThList)`
  font-size: 14px;
  fill: #000;
`;

export const OutlinePhotoSizeSelectActualIcon = styled(
  MdOutlinePhotoSizeSelectActual
)`
  font-size: 14px;
  fill: #000;
`;

export const RegNewspaperIcon = styled(FaRegNewspaper)`
  font-size: 14px;
  fill: #000;
`;

export const PhoneSquareAltIcon = styled(FaPhoneSquareAlt)`
  font-size: 14px;
  fill: #000;
`;

export const ChevronDownIcon = styled(BsChevronDown)`
  font-size: 12px;
  fill: #000;
  margin-left: 4px;
  font-size: bold;
`;

export const Map2Icon = styled(TbMap2)`
  font-size: 45px;
  color: #354a6b;
`;

export const MobilePhoneIcon = styled(BsPhone)`
  font-size: 45px;
`;

export const MenuIcon = styled(HiMenu)`
  font-size: 35px;
`;

export const ArrowRightSFillIcon = styled(RiArrowRightSFill)`
  font-size: 25px;
`;
