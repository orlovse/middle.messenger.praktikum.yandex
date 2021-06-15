const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

type FetchMethod = (url: string, options: any) => Promise<XMLHttpRequest>;

type RequestMethod = (
  url: string,
  options: any,
  timeout?: number
) => Promise<XMLHttpRequest>;

interface IFetch {
  get: FetchMethod;
  post: FetchMethod;
  put: FetchMethod;
  patch: FetchMethod;
  delete: FetchMethod;
  request: RequestMethod;
}

function queryStringify(data: Object) {
  if (typeof data !== "object") {
    throw new Error("Data must be object");
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`;
  }, "?");
}

class HTTPTransport implements IFetch {
  get: FetchMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  };

  post: FetchMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  put: FetchMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  patch: FetchMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PATCH },
      options.timeout
    );
  };

  delete: FetchMethod = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request: RequestMethod = (url, options = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise<XMLHttpRequest>(function (resolve, reject) {
      if (!method) {
        reject("No method");
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

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
