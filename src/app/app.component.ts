import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'testsimple';
  theme = {
    primary100: '#2281CB',
  primary200: '#22B1E0',
  primary300: '#22F6FF',
  primary400: '#222E79',
  primary500: '#225499',
  primary600: '#22EAF9',

  accent100: '#227800',
  accent200: '#22621F',
  accent300: '#22EDE3',

  success100: '#22BE5B',
  success200: '#138E33',
  success300: '#E3FFEC',

  warning100: '#FF3333',
  warning200: '#D81E1E',
  warning300: '#FFD9D9',

  text100: '#113333',
  text200: '#666666',
  text300: '#999999',
  text400: '#CCCCCC',

  background100: '#22F4F4',
  background200: '#33FAFA',
  background300: '#22FFFF'
};

}

