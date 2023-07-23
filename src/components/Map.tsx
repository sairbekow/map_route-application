import 'leaflet/dist/leaflet.css'
import L, { Map as LeafletMap } from 'leaflet'
import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import polyline from '@mapbox/polyline'
import { fetchRoute } from '../store/sagaActions/mapSagaActions.ts'
import { useAppDispatch, useAppSelector } from '../hooks/redux.ts'
import ChangeView from './ChangeView.tsx'
import { convertRouteObjectToArray } from '../utils/convertRouteObject.ts'

const Map = () => {
  const mapRef = useRef<LeafletMap>(null)
  const dispatch = useAppDispatch()
  const routeGeometry = useAppSelector((state) => state.map.routeGeometry)
  const currentSelectedRoutePoints = useAppSelector(
    (state) => state.map.currentSelectedRoutePoints
  )

  useEffect(() => {
    dispatch(fetchRoute(currentSelectedRoutePoints))
  }, [dispatch, currentSelectedRoutePoints])

  const decodePolyline = (routeString: string) => {
    return polyline.decode(routeString)
  }

  const routeCoordinates = routeGeometry ? decodePolyline(routeGeometry) : null
  const arrayPolyline = convertRouteObjectToArray(currentSelectedRoutePoints)

  return (
    <MapContainer
      ref={mapRef}
      className='leaflet-container'
      center={arrayPolyline[0]}
      zoom={13}
      scrollWheelZoom={true}>
      <ChangeView path={new L.Polyline(arrayPolyline)} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {routeCoordinates && (
        <Polyline positions={routeCoordinates} color='blue' />
      )}
      {currentSelectedRoutePoints &&
        currentSelectedRoutePoints.map((point, index) => (
          <Marker key={index} position={[point.lat, point.lng]}>
            <Popup>Точка маршрута {index + 1}</Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}

export default Map
