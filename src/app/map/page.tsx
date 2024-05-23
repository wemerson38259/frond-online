"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  SVGOverlay,
  ImageOverlay,
  useMap,
} from "react-leaflet";
import { LatLngBounds } from "leaflet";
export function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  return null;
}

export default function MyMapComponent() {
  const bounds = new LatLngBounds(
    [40.712216, -74.22655],
    [40.773941, -74.12544]
  );

  return (
    <div>
      <MapContainer
        preferCanvas={true}
        center={[51.505, -0.09]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: "800px", width: "800px" }}
        className="border-4 border-y-orange-400 border-x-orange-300"
      >
        {/* <MyComponent>
        <ImageOverlay
          url="http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"
          bounds={bounds}
          opacity={0.5}
          zIndex={10}
        />
      </MyComponent> */}
      </MapContainer>
    </div>
  );
}
