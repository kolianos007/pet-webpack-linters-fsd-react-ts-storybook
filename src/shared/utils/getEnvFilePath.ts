export const getEnvFilePath = () => {
  const env = process.env.NODE_ENV || 'development';
  if (env === 'e2e') {
    return `.env.e2e`;
  }
  return `.env.${env}`;
};
