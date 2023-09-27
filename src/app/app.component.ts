import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titrePrincipal = 'mon_premier_projet_test';
  sousTitre = 'Je suis un sous-titre';
  description = 'Je suis une description';
}
