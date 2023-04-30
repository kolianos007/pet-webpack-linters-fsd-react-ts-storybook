import { getEnvFilePath } from '../../src/shared/utils';

const dotenv = require('dotenv');

const HomePage = require('../pages/home.page');

dotenv.config({ path: getEnvFilePath() });

describe('Home e2e test', () => {
  before(async () => {
    await browser.url(`${process.env.APP_URL}/login`);
    await browser.execute(() => {
      localStorage.setItem('registrationData', JSON.stringify({ username: 'qwerty', password: '123456' }));
      localStorage.setItem('loginData', JSON.stringify({ username: 'qwerty', password: '123456' }));
    });
  });
  it('Should display random numbers and their sum', async () => {
    await HomePage.open();
    const initialNumbers = await $('[data-testid="numbers"]').getText();
    await $('[data-testid="generateNewNumber"]').click();

    await browser.pause(500);

    const updateNumbers = await $('[data-testid="numbers"]').getText();
    expect(updateNumbers).not.toStrictEqual(initialNumbers);
  });
});
