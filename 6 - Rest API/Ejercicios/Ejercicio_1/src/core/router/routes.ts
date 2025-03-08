import { generatePath } from "react-router";

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  editHotel: string;
  characterCollection: string;
  character: string;
  episodeCollection: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  hotelCollection: "/hotels",
  createHotel: "/hotels/create",
  editHotel: "/hotels/:id",
  characterCollection: "/characters",
  character: "/characters/:id",
  episodeCollection: "/episodes",
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, "editHotel"> {
  editHotel: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
};
