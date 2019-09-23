import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('App', () => {
  let page: AppPage;
  const input = element(by.tagName('input'));

  beforeEach(() => {
    page = new AppPage();
  });

  describe('tags ', () => {

    it('should display a Title', () => {
      page.navigateTo();
      expect(page.getTitleText()).toEqual('CALCULATE');
    });

    it('should display an input', () => {
      expect(input.isPresent()).toBeTruthy();
    });

    it('should display a select', () => {
      const select = element(by.tagName('select'));
      expect(select.isPresent()).toBeTruthy();
    });

    it('should display a button', () => {
      const button = element(by.tagName('button'));
      expect(button.isPresent()).toBeTruthy();
    });

    it('should display result', () => {
      const result = element(by.id('result'));
      expect(result.isPresent()).toBeTruthy();
    });

    it('should display TVA', () => {
      const tva = element(by.id('tva'));
      expect(tva.isDisplayed()).toBeTruthy();
    });
  });

  describe ('features', () => {

    beforeEach(() => {
      element(by.tagName('input')).sendKeys('2');
      element(by.tagName('select')).sendKeys('20');
      element(by.tagName('button')).click();
    });

    afterEach(() => {
      input.clear();
    });

    it('should multiply', () => {
      expect(element(by.id('result')).getText()).toEqual('Montant : 40');
    });

    it('should calculate the tva', () => {
      expect(element(by.id('tva')).getText()).toEqual('8');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
