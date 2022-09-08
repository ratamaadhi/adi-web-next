import axios from 'axios';

function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

// Helper to make GET requests to Strapi
async function fetchAPI(path, options = {}) {
  const requestUrl = getStrapiURL(path);
  const response = await axios.get(requestUrl, {
    ...options,
  });
  const data = await response.data;
  return data;
}

function createContactMeApi({ fullName, email, message }) {
  return axios({
    method: 'POST',
    url: getStrapiURL('/contact-mes'),
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      fullName,
      email,
      message,
    },
  });
}

export { getStrapiURL, fetchAPI, createContactMeApi };
