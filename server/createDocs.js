const generateHtmlFromYaml = require('swagger-yaml-to-html');

// Provide input YAML file path and output HTML file path
const inputFilePath = './doc/spec.yaml';
const outputFilePath = './doc/output.html';

// Convert YAML to HTML
generateHtmlFromYaml(inputFilePath, outputFilePath);
