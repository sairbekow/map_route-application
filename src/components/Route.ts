import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import L from 'leaflet'
import { useAppSelector } from '../hooks/redux.ts'

const Route = () => {
  const map = useMap()
  const coordinates = useAppSelector((state) => state.map.coordinates)
  const currentRoutePoints = useAppSelector(
    (state) => state.map.currentRoutePoints
  )

  useEffect(() => {
    if (coordinates) {
      const polyline = L.polyline(coordinates, { color: 'blue' }).addTo(map)
      map.fitBounds(polyline.getBounds())
    }
  }, [currentRoutePoints, coordinates])

  return null
}

export default Route
