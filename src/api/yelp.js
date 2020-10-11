import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer V0X8S2ybrmgjVIX2YgIshpSDL8-do9DBw09ttSE8kAOMv6as9hpu7ix8xtiLXZOS-GN51AlNMJNWeuaupXtAymwZag1Rc616tf_LmGHPq7SgwV05uT_gIDm1FduCX3Yx'
  }
});