const API = 'http://ec2-54-234-140-160.compute-1.amazonaws.com:8080';

export const environment = {
  production: true,
  converter: {
    file: API + '/converter/anytowebfile',
    url: API + '/converter/anytoweburl',
  },
  bitmovin_apikey: 'bf6ef996-8bd8-4429-bded-9d49bbcd83f7'
};
