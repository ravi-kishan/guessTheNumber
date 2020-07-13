const scanner = require('sonarqube-scanner');
const path = require('path');

scanner(
  {
    //serverUrl : 'https://sonarqube.mycompany.com',
    //token : "019d1e2e04eefdcd0caee1468f39a45e69d33d3f",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'lib',
      'sonar.tests': 'src',
      'sonar.javascript.lcov.reportPaths': 'path.resolve(__dirnameasfggg,coverage/lcov.info)'
    }
  },
  () => process.exit()
)