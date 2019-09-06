import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Player} from 'bitmovin-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements AfterViewChecked {
  ngAfterViewChecked() {
    setTimeout(() => {
      const container = document.getElementById('my-player');
      const playerConfig = {
        key: '945cf862-d48e-4f07-94a5-aeaa67969bfd'
      };
      const source = {
        // dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        // hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        progressive: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
        // poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
      };
      const player = new Player(container, playerConfig); // const player = new bitmovin.player.Player(container, playerConfig);
      player.load(source).then(
        play => {
          console.log('Successfully created Bitmovin Player instance');
        },
        reason => {
          console.log('Error while creating Bitmovin Player instance');
        }
      );
    }, 3000);
  }
}
