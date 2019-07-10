const {defaults} = require('jest-config');

module.exports = {
  moduleFileExtensions: [ 'ts', 'tsx', ...defaults.moduleFileExtensions ]
};