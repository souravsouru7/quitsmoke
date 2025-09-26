export const API_BASE_URL = 'https://api.quiteasy.in';

export const apiFetch = (path, options = {}) => {
  const url = `${API_BASE_URL}${path}`;
  return fetch(url, options);
};


