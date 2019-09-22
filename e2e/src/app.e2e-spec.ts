import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a Title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('CALCULATE TVA');
  });

  it('it should multiply', function() {

    element(by.css('input')).sendKeys('2');
    element(by.css('select')).sendKeys('20');
    element(by.tagName('button')).click();

    browser.sleep(3000);

    expect(element(by.id('result')).getText()).toEqual('40');
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
