import {Component, Input, OnInit} from '@angular/core';
import {Player, PlayerEvent} from 'bitmovin-player';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {
  type: string;
  url: string;

  constructor() {
  }

  ngOnInit() {
    this.type = this.getProtocol(history.state.data.key.slice(history.state.data.key.lastIndexOf('.'), history.state.data.key.length));
    this.url = history.state.data.url;
    this.getVideo();
  }

  getVideo() {
    const config = {
      key: environment.bitmovin_apikey
    };

    const player = new Player(document.getElementById('my-player'), config);

    player.on(PlayerEvent.Playing, () => console.log('player is playing'));
    player.load({
      hls: history.state.data.url,
    }).then(() => {
      player.play();
    });
  }

  getProtocol(type: string): string {
    switch (type) {
      case '.mp4':
        return this.type = 'Progressive';
      case '.m3u8':
        return this.type = 'HLS';
      case '.mpd':
        return this.type = 'MPEG-DASH';
    }
  }
}
