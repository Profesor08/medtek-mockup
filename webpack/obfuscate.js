const obfuscator = require('webpack-obfuscator');

module.exports = function () {
  return {
    plugins: [
      new obfuscator({
        rotateUnicodeArray: true,
        rotateStringArray: true,
        stringArray: true,
        stringArrayEncoding: true,
        stringArrayThreshold: 1
      })
    ]
  };
};
