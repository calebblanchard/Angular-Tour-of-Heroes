import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class AngularTourOfHeroesPage {
=======
export class TohCliPage {
>>>>>>> Part 3 completed
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
