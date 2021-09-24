import Axios, { AxiosError } from 'axios'

export const get = (route: string) => {
  const config = {}

  return Axios.get(route, config)
    .then((response) => {
      let responseData = response.data;

      if (responseData === null) {
        responseData = []
      }

      if (responseData instanceof Object) {
        return responseData
      } else {
        responseData = []
      }

      return responseData
    })
    .catch((error: AxiosError) => {
      if (Axios.isCancel(error)) {
        // console.log('Request canceled: ', error.message);
        return;
      }

      // console.log('error', error.response)
      // return error

      return Promise.reject({
        status: error.response!!.status,
        what: error.response!!.statusText,
      })
    })
}