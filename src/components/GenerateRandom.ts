import axios from 'axios';

const PIXABAY_API_KEY = 'YOUR_PIXABAY_API_KEY'; // Replace with your API key
const PIXABAY_API_URL = 'https://pixabay.com/api/';

export const fetchRandomImage = async (query = 'avatar') => {
  try {
    const response = await axios.get(PIXABAY_API_URL, {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: 'photo',
        per_page: 10,
      },
    });

    const images = response.data.hits;
    if (images.length > 0) {
      // Return a random image
      return images[Math.floor(Math.random() * images.length)].webformatURL;
    } else {
      throw new Error('No images found');
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};
