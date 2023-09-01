import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const KEY = '36318494-588897fc86ad50d359fa41850';

const fetchImages = async (searchValue, page) => {
  const response = await axios.get(API_URL, {
    params: {
      q: searchValue,
      page: page,
      key: KEY,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response.data.hits;
};
export default fetchImages;
