/*
* This is an autogenerated file, any manual edits to this may be overridden.
* To modify how this code is generated please look at frontend_build/src/intl_code_gen.js
* If you change the supported_language.json, then this file must be regenerated by running:
* yarn run generate-locale-data
*/
module.exports = function(locale) {
  switch (locale) {
    case 'en':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/en.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/en.js'));
        });
      });
    case 'sw-TZ':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/sw-TZ.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/sw-TZ.js'));
        });
      });
    case 'es-ES':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/es-ES.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/es-ES.js'));
        });
      });
    case 'fr-FR':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/fr-FR.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/fr-FR.js'));
        });
      });
    case 'ar':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/ar.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/ar.js'));
        });
      });
    case 'fa':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/fa.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/fa.js'));
        });
      });
    case 'ur-PK':
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/ur-PK.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/ur-PK.js'));
        });
      });
    default:
      return new Promise(function(resolve) {
        require.ensure(['intl/locale-data/jsonp/en.js'], function(require) {
          resolve(require('intl/locale-data/jsonp/en.js'));
        });
      });
  }
};