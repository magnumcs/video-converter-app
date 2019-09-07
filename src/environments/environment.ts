const API = 'http://localhost:8080';

export const environment = {
  production: false,
  converter: {
    file: API + '/converter/anytowebfile',
    url: API + '/converter/anytoweburl',
  },
  bitmovin_apikey: 'bf6ef996-8bd8-4429-bded-9d49bbcd83f7'
};
