import { getStrapiURL } from './api';
import kucingLoading from '../public/kucing_loading.jpg';

function getStrapiMedia(media) {
  const imageUrl =
    media !== null
      ? media?.url.startsWith('/')
        ? getStrapiURL(media.url)
        : media?.url
      : kucingLoading;
  return imageUrl;
}

function myLoader(load) {
  return `${load.src}?w=${load.width}&q=${load.quality || 75}`;
}

export { getStrapiMedia, myLoader };
