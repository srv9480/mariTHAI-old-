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
  ];

  return (
    <div style={{maxWidth: '1220px', height: '420px'}}>
      <YMaps >
        <Map defaultState={ mapData } class={'map-large'} width={680} height={420}>
          {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
        </Map>
      </YMaps>
      </div>
  );
}