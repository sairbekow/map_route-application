import { useMap } from 'react-leaflet'
import { useEffect } from 'react'
import { Polyline } from 'leaflet'

interface IChangeView {
  path: Polyline
}

const ChangeView = ({ path }: IChangeView): null => {
  const map = useMap()

  useEffect(() => {
    const bounds = path.getBounds()
    map.setMaxZoom(13)
    map.fitBounds(bounds)

  }, [path, map])

  return null
}

export default ChangeView
