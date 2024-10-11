import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwaService} from "../../../../../common/services/twa.service";

@Component({
  selector: 'main-intro',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="m-3 mb-5 text-center">
      @if(currentLanguage == 'ru') {
        <h5>Следи за своими финансами <span class="h1 color-accent">легко</span></h5>
        <p><span class="h1 color-accent">Управляй</span> бюджетом, отслеживай расходы <span class="h1 color-accent">и достигай</span> финансовых <span class="h1 color-accent">целей</span>.</p>
      } @else if (currentLanguage == 'de') {
        <h5>Überwachen Sie Ihre Finanzen ganz einfach</h5>
        <p>Verwalten Sie Ihr Budget, verfolgen Sie Ausgaben und erreichen Sie Ihre finanziellen Ziele.</p>
      } @else if (currentLanguage == 'pt') {
        <h5>Monitorize as suas finanças facilmente</h5>
        <p>Faça a gestão do seu orçamento, controle despesas e alcance as suas metas financeiras.</p>
      } @else if (currentLanguage == 'fr') {
        <h5>Surveillez facilement vos finances</h5>
        <p>Gérez votre budget, suivez vos dépenses et atteignez vos objectifs financiers.</p>
      } @else {
        <h5>Keep track of your finances <span class="h1 color-accent">easily</span></h5>
        <p><span class="h1 color-accent">Manage</span> your budget, track your expenses <span class="h1 color-accent">and achieve your</span> financial <span class="h1 color-accent">goals</span>.</p>
      }
    </div>
  `,
  host: {class: 'd-flex flex-column h-100'},
})
export class IntroComponent {

  currentLanguage: string|undefined

  constructor(
    protected twa: TwaService,
  ) {
    this.currentLanguage = twa.getUserLanguageCode()
  }
}
