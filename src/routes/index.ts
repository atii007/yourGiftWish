import { RoutePaths } from "./RouterPaths";
import { GiftFinder } from "./RouterLazyImports";

const { giftFinderPath } = RoutePaths;

const publicRoutes = [
  {
    path: giftFinderPath,
    component: GiftFinder,
  },
];

export { publicRoutes };
