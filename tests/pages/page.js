import { getEnvFilePath } from '../../src/shared/utils';

const dotenv = require('dotenv');

dotenv.config({ path: getEnvFilePath() });

module.exports = class Page {
  open(path) {
    return browser.url(`${process.env.APP_URL}/${path}`);
  }
};
