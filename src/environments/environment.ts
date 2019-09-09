const API = 'http://localhost:8080';

export const environment = {
  production: false,
  converter: {
    file: API + '/converter/anytowebfile',
    url: API + '/converter/anytoweburl',
  },
  bitmovin_player_key: '64ff28d0-1c86-4428-b4fe-1394c1fd2feb'
};
