Package.describe({
  name: 'jss:ga',
  version: '0.0.1',
  summary: 'Google Analytics data exporting library for MeteorJS.',
  git: 'https://github.com/JSSolutions/meteor-ga'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('ga.js', 'server');
  api.export('GAnalytics', 'server');
});

Npm.depends({
  googleanalytics: '0.3.7'
});

Package.onTest(function(api) {
  api.use(['tinytest', 'googleanalytics'], 'server');
  api.addFiles('tests.js', 'server');
});