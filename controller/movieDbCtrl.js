const axios = require('axios');

//metre l'objet de la recherche dans un query a l'intérieur url exemple : http://localhost:3000/music/ytb?query=kaaris
module.exports = {
  getTopRated: async (req, res) => {
    const movieOptions = {
      method: 'GET',
      params: { api_key: '916fb6e639cd5c3054bfacbb189a5b6c' },
      url: 'https://api.themoviedb.org/3/movie/top_rated',
    };

    const result = await axios.request(movieOptions);
    if (result) {
      res.status(200).json(result.data);
    } else {
      res.status(400).json({
        success: false,
        message: 'Cannot get result',
      });
    }
  },
};
