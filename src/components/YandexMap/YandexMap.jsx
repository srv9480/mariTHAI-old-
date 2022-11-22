import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './style.less';

export default function YMap() {
  const mapData = {
    center: [55.861287, 37.541243],
    zoom: 15,
    behaviors: ['disabled'],
  };

  const coordinates = [
    [55.861287, 37.541243],
  ];

  return (
    <div>
      <YMaps>
        <Map
          defaultState={mapData}
          class="map-large"
        >
          {coordinates.map((coordinate) => (
            <Placemark geometry={coordinate} />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
