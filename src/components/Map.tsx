import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useAppSelector } from '../hooks/redux.ts'
import 'leaflet/dist/leaflet.css'
import Route from './Route.ts'

const Map = () => {
  const currentRoutePoints = useAppSelector(
    (state) => state.map.currentRoutePoints
  )

  return (
    <MapContainer
      className='leaflet-container'
      center={[59.84660399, 30.29496392]}
      zoom={12}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Route />
      {currentRoutePoints &&
        currentRoutePoints.map((point, index) => (
          <Marker key={index} position={[point.lat, point.lng]}>
            <Popup>Точка маршрута {index + 1}</Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}

export default Map
