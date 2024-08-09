import { themes } from "@/utils/themes";
import global from "@/styles/globals";
import useWindowSize from "./useWindowSize";

export type ResponsivePoint =
  | "phone"
  | "tablet"
  | "middle"
  | "desktop"
  | "screen"
  | "extra";
export type ResponsivePointHook = {
  responsivePoint: ResponsivePoint;
  isSmaller: (point: ResponsivePoint) => boolean;
  isSmallerOrEqual: (point: ResponsivePoint) => boolean;
  isLarger: (point: ResponsivePoint) => boolean;
  isLargerOrEqual: (point: ResponsivePoint) => boolean;
  is: (point: ResponsivePoint) => boolean;
};

export default function useResponsivePoint(): ResponsivePointHook {
  const { width: screenWidth } = useWindowSize();

  const isSmaller = (point: ResponsivePoint): boolean =>
    screenWidth < themes.breakpoints[point];
  const isSmallerOrEqual = (point: ResponsivePoint): boolean =>
    screenWidth <= themes.breakpoints[point];
  const isLarger = (point: ResponsivePoint): boolean =>
    screenWidth > themes.breakpoints[point];
  const isLargerOrEqual = (point: ResponsivePoint): boolean =>
    screenWidth >= themes.breakpoints[point];
  const is = (point: ResponsivePoint): boolean =>
    screenWidth === themes.breakpoints[point];

  let responsivePoint: ResponsivePoint = "extra";
  if (screenWidth <= global.breakpoints.screen) responsivePoint = "screen";
  if (screenWidth <= global.breakpoints.desktop) responsivePoint = "desktop";
  if (screenWidth <= global.breakpoints.middle) responsivePoint = "middle";
  if (screenWidth <= global.breakpoints.tablet) responsivePoint = "tablet";
  if (screenWidth <= global.breakpoints.phone) responsivePoint = "phone";

  return {
    responsivePoint,
    isSmaller,
    isSmallerOrEqual,
    isLarger,
    isLargerOrEqual,
    is,
  };
}
