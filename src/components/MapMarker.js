import React from 'react';
import L from 'leaflet';
import { Marker } from 'react-leaflet';
// import Spoon from '../public/spoon.png';


const iconMap = new L.Icon({
    iconUrl: require('https://cdn.emojidex.com/emoji/seal/spoon.png?1449235023'),
    iconRetinaUrl: require('https://cdn.emojidex.com/emoji/seal/spoon.png?1449235023'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconMap };
