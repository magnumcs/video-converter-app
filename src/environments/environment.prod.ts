const API = 'http://ec2-54-234-140-160.compute-1.amazonaws.com:8080';

export const environment = {
  production: true,
  converter: {
    file: API + '/converter/anytowebfile',
    url: API + '/converter/anytoweburl',
  },
  bitmovin_player_key: '64ff28d0-1c86-4428-b4fe-1394c1fd2feb'
};
