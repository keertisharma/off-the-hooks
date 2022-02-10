export const apiUrl = "http://localhost:3060";

export const HTTP_METHOD_GET = 'GET';
export const HTTP_METHOD_POST = 'POST';
export const HTTP_METHOD_PUT = 'PUT';
export const HTTP_METHOD_DELETE = 'DELETE';

export const collectionUrl = (elementPath) =>
  `${apiUrl}/${encodeURIComponent(elementPath)}`;

export const elementUrl = (elementPath, elementId) =>
  `${collectionUrl(elementPath)}/${encodeURIComponent(elementId)}`;

export const fetchOptions = (method = HTTP_METHOD_GET, data) => {

  if (method === HTTP_METHOD_POST || method === HTTP_METHOD_PUT) {
    return {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  }

  return { method };
};