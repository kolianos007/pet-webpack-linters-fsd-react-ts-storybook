import dotenv from 'dotenv';

import { getEnvFilePath } from '../../src/shared/utils';

const RegistrationPage = require('../pages/registration.page');

dotenv.config({ path: getEnvFilePath() });

describe('Registration e2e test', () => {
  it('Should registration', async () => {
    await RegistrationPage.open();
    await RegistrationPage.registration('qwerty', '123456');
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toEqual(`${process.env.APP_URL}/`);
  });
});
