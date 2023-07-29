import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { MapProps } from '../types/Api_types';

const icon = L.icon({
    iconUrl : "marker.png",
    iconSize : [38, 38]
})

function NewMapView(props : LatLngExpression){
    const map = useMap();
    useEffect(() => {
        if(props){
            map.setView(props),
            map.setZoom(15),
            {
                animate : true
            }
        }
    },[props]);
   return null;
}

export default function Map({ lat, lon } : MapProps){
    const coordinates = lat && lon? [ lat, lon ].map(coord => parseFloat(coord)):
    [51.505, -0.09];

    return(
        <MapContainer 
            center={coordinates as LatLngExpression} 
            zoom={13} 
            scrollWheelZoom={true}
            style={{
                height : '100%',
                width : '100%',                
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=G36gnpCw6AGFmqlNdZXv'
            />
            <Marker position={coordinates as LatLngExpression} icon={icon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <NewMapView lat={coordinates[0]} lng={coordinates[1]}/>
        </MapContainer>
    )
}