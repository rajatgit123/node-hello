const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http:',
    options : {
      'sonar.projectDescription': 'This is Node JS Application',
      'sonar.projectName': 'nodejs-hello',
      'sonar.projectKey': 'NodeJSHello',
      'sonar.login': 'admin',
      'sonar.password': 'admin',
      'sonar.language': 'js',
      'sonar.sources': '.',
    },
}, () => {});
