//here all lazy import will come
import { lazy } from "react";

const MemberLayout = lazy(() => import("../../layout/MemberLayout"));
const VisitorLayout = lazy(() => import("../../layout/VisitorLayout"));
const GiftFinder = lazy(() => import("../../pages/GiftFinder"));

export { MemberLayout, VisitorLayout, GiftFinder };
