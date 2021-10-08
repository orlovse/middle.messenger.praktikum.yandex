import { FetchMethodType, IFetch, RequestMethodType } from '../types';
import { queryStringify } from '../utils/queryStringify';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

const baseURL = 'https://ya-praktikum.tech/api/v2';

export class HTTPTransport implements IFetch {
  baseUrl = baseURL;
  constructor() {}

  get: FetchMethodType = (url, options = {}) => {
    return this.request(
      this.baseUrl + url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post: FetchMethodType = (url, options = {}) => {
    return this.request(
      this.baseUrl + url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  put: FetchMethodType = (url, options = {}) => {
    return this.request(
      this.baseUrl + url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  patch: FetchMethodType = (url, options = {}) => {
    return this.request(
      this.baseUrl + url,
      { ...options, method: METHODS.PATCH },
      options.timeout
    );
  };

  delete: FetchMethodType = (url, options = {}) => {
    return this.request(
      this.baseUrl + url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request: RequestMethodType = (url, options = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;
    return new Promise<XMLHttpRequest>(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      xhr.withCredentials = true;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export const http = new HTTPTransport();
