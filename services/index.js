import { getBearerToken } from './bearer-token'

const api_base_url = process.env.BASE_URL || 'http://localhost:3000/'

const server = {}

export async function authRequestOptions({ headers } = { headers: {} }) {
  const authHeaders = new Headers()

  if (headers) {
    Object.keys(headers).forEach((key) => {
      authHeaders.append(key, headers[key])
    })
  }

  authHeaders.append('Accept', 'application/json')

  if (!authHeaders.has('Content-Type')) {
    authHeaders.append('Content-Type', 'application/json')
  }

  const bearerToken = await getBearerToken()

  authHeaders.append('Authorization', `Bearer ${bearerToken}`) //TODO Authorization to be set

  return {
    headers: authHeaders,
    redirect: 'follow',
  }
}

function queryParamString(queryParamObject) {
  let queryString = new URLSearchParams(queryParamObject).toString()
  return queryString.length > 0 ? `?${queryString}` : ''
}

const methods = ['get', 'post', 'put', 'patch', 'delete', 'options']

methods.map(function (requestMethod) {
  server[requestMethod] = async function (url, data = {}, options = {}) {
    const queryString = queryParamString(
      requestMethod === 'get' ? data?.params : options?.params
    )

    const method = requestMethod.toUpperCase()
    const headers =
      (requestMethod === 'get' ? data.headers : options.headers) || {}

    let requestOptions = {
      ...(requestMethod === 'get' ? data : options),
      ...(await authRequestOptions({ headers })),
      method,
      ...(requestMethod !== 'get' && data
        ? { body: JSON.stringify(data) }
        : {}),
    }

    console.info(
      `Requesting: ${method} ${api_base_url}${url}${queryString}`,
      method == 'GET' ? '' : data,
      { requestOptions }
    )

    try {
      return await fetch(`${api_base_url}${url}${queryString}`, {
        ...requestOptions,
        ...{ cache: 'no-cache' }, // Cache disabled for all api request
      })
    } catch (error) {
      console.error(`Fetch failed for ${method} ${url}`, error)
      throw error
    }
  }
})


export { api_base_url, server }

