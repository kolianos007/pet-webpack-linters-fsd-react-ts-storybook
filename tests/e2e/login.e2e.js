import { getEnvFilePath } from '../../src/shared/utils';

const dotenv = require('dotenv');

const LoginPage = require('../pages/login.page');

dotenv.config({ path: getEnvFilePath() });

describe('Login e2e test', () => {
  before(async () => {
    await browser.url(`${process.env.APP_URL}/login`);
    await browser.execute(() => {
      localStorage.setItem('registrationData', JSON.stringify({ username: 'qwerty', password: '123456' }));
    });
  });
  it('Should login with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('qwerty', '123456');
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toEqual(`${process.env.APP_URL}/`);
  });
});
