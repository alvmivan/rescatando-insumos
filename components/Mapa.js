import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Mapa({ donaciones, servicios }) {
  return (
    <MapContainer center={[-38.7196, -62.2655]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {donaciones.map(donacion => (
        <Marker key={donacion.id} position={[donacion.lat, donacion.lng]}>
          <Popup>
            <b>{donacion.nombre}</b><br />
            {donacion.insumos}<br />
            <a href={`tel:${donacion.telefono}`}>{donacion.telefono}</a>
          </Popup>
        </Marker>
      ))}
      {servicios.map(servicio => (
        <Marker key={servicio.id} position={[servicio.lat, servicio.lng]}>
          <Popup>
            <b>{servicio.nombre}</b><br />
            {servicio.servicio}<br />
            <a href={`tel:${servicio.telefono}`}>{servicio.telefono}</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}