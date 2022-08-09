import { ROUTES } from '@typings/routeNames';

export type UnauthenticatedNavigationMap = {
  [ROUTES.Main]: undefined;
};

export type MainNavigationMap = {
  [ROUTES.HomeTab]: undefined;
  [ROUTES.Dashboard]: undefined;
};

export type NavigationMap = UnauthenticatedNavigationMap & MainNavigationMap;
