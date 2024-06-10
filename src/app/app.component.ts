import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title:string = 'Acadia Guide Routes';

  selected_area:string = 'otter_cliffs';
  
  // import from json file, this is just to test
  // metadata:any = {
  //   'otter_cliffs': {
  //     'drive_time': '15 minutes',
  //     'approach_time' : '5 minutes'
  //   }
  // }

  // so we could just request this from my github site
  // sans pictures
  // should i do that first? or go straight to mongo
  routes:any = {
    'otter_cliffs': [
      {
        'name': 'razorback',
        'grade': '5.5',
        'site': 'top',
        'fortym': 'yes',
        'pic': 'url?',
        'anchor': 'url?',
        'beta': 'lower to ledge above the bottom, easy climbing to a big step out right'
      }
    ]
  }
}
