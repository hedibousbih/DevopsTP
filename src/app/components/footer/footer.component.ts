import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  lastName: string = 'Zarkani';
  currentDate: string = '';
  ngOnInit(): void {
    this.lastName.toUpperCase(); // Remplacez "NomDeFamille" par votre nom
    const today = new Date();
    this.currentDate = this.formatDate(today);
  }

  // Fonction pour formater la date au format JJ/MM/AAAA
  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
