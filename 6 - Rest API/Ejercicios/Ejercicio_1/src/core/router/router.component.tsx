import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  HotelCollectionScene,
  HotelScene,
  CharacterScene,
  CharacterCollectionScene,
  EpisodeCollectionScene,
  LocationCollectionScene,
} from "#scenes";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.episodeCollection}
          element={<EpisodeCollectionScene />}
        />
        <Route
          path={switchRoutes.locationCollection}
          element={<LocationCollectionScene />}
        />
        <Route path={switchRoutes.character} element={<CharacterScene />} />
        <Route
          path={switchRoutes.hotelCollection}
          element={<HotelCollectionScene />}
        />
        <Route path={switchRoutes.createHotel} element={<HotelScene />} />
        <Route path={switchRoutes.editHotel} element={<HotelScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
