import React from 'react';
import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [55.4727, 49.06];
const zoom:number = 12;

const LeafletMap:React.FC = () => {
    return (
        <MapContainer id="mapId"
             center={defaultLatLng}
             zoom={zoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={defaultLatLng}>

            </Marker>
        </MapContainer>
    )
}

export default LeafletMap;