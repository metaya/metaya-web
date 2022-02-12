module.exports = {
  outputDir: process.env.NODE_ENV === 'production'
    ? `dist-${process.env.APP_LANG}`
    : `dist-stag${process.env.APP_LANG}`,
};
