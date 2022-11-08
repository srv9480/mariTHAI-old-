import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import './style.less'

export default function YMap() {
  const mapData = {
    center: [55.857991, 37.556012],
    zoom: 15,
  };
  const coordinates = [
    [55.857991, 37.556012],
    [57.684758, 39.738521]
  ];

  return (
    // Important! Always set the container height explicitly
    <div>
      <YMaps>
        <Map defaultState={mapData } width={740} height={480}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
    </div>
  );
}