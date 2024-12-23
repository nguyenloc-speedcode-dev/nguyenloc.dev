/* eslint-disable @typescript-eslint/no-require-imports */
const withNextIntl = require('next-intl/plugin')('./src/i18n/i18n.ts');

const nextConfig = {

}

module.exports = withNextIntl(nextConfig);