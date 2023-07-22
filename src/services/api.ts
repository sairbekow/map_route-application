import axios from 'axios'

const baseURL = 'http://router.project-osrm.org/route/v1/driving'
export const getOSRMGeometry = (coordinates: string) => {
  return axios.get(`${baseURL}/${coordinates}?overview=full`)
}
