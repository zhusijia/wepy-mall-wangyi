import wepy from 'wepy'
import { baseUrl, appId } from '../config/index'

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

class Request {

  _header = {}

  constructor() {
    this._baseUrl = baseUrl
    this._appId = appId
  }

  request(params) {
    const { url, method, header, data } = params
    console.log('[request....]', params)
    return wepy.request({
      url: this._baseUrl + url,
      method: method || METHOD.GET,
      data: data,
      header: {
        appId: this._appId,
        ...this._header
      }
    })
  }

  get(url, data, header) {
    return this.request({ url, method: METHOD.GET, header, data })
  }

  post(url, data, header) {
    return this.request({ url, method: METHOD.POST, header, data })
  }
  
  put(url, data, header) {
    return this.request({ url, method: METHOD.PUT, header, data })
  }

  delete(url, data, header) {
    return this.request({ url, method: METHOD.DELETE, header, data })
  }

  header(header) {
    this._header = header
    return this
  }
}

export default new Request()