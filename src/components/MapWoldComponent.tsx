import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon, LatLngBounds } from "leaflet";
export default function MapWoldComponent() {
  window.localStorage.foo = "bar";
  const frondIcon = new Icon({
    iconUrl: "/camp.png",
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  return (
    <>
      <MapContainer
        preferCanvas={true}
        center={[0, 0]}
        zoom={0}
        scrollWheelZoom={true}
        style={{
          height: "800px",
          // width: "100vw"
        }}
        className="border-4 border-y-orange-400 border-x-orange-300"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="./FRONDMAP/{z}/{x}/{y}.png"
          minZoom={2}
          detectRetina={true}

          // zoomReverse={true}
        />
        <Marker position={[0, -0]}>
          <Popup>
            This Marker icon is displayed correctly with{" "}
            <i>leaflet-defaulticon-compatibility</i>.
          </Popup>
        </Marker>
        <Marker position={[10, -45]} icon={frondIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
