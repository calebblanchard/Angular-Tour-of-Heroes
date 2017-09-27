<<<<<<< HEAD
import { AngularTourOfHeroesPage } from './app.po';

describe('angular-tour-of-heroes App', () => {
  let page: AngularTourOfHeroesPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesPage();
=======
import { TohCliPage } from './app.po';

describe('toh-cli App', () => {
  let page: TohCliPage;

  beforeEach(() => {
    page = new TohCliPage();
>>>>>>> Part 3 completed
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
