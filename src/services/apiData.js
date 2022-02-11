import {
    collectionUrl, elementUrl, fetchOptions,
    HTTP_METHOD_POST, HTTP_METHOD_PUT, HTTP_METHOD_DELETE
  } from '../services/helper/apiData';

  export const createApi = (resourceName) => {
  
    const all = async () => {
      const res = await fetch(collectionUrl(resourceName));
      return res.json();
    };
  
    const append = async resourceData => {
      const res = await fetch(
        collectionUrl(resourceName),
        fetchOptions(HTTP_METHOD_POST, resourceData));
      return res.json();
    };
  
    const replace = async resourceData => {
      const url = elementUrl(resourceName, resourceData.id)
      const res = await fetch(
        url,
        fetchOptions(HTTP_METHOD_PUT, resourceData));
      return res.json();
    };
  
    const remove = async resourceId => {
      const res = await fetch(
        elementUrl(resourceName, resourceId),
        fetchOptions(HTTP_METHOD_DELETE));
      return res.json();
    };
  
    return {
      all, append, replace, remove,
    };
  
  };