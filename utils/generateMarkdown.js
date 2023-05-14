// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '' || 'None') {
    return `![GitHub License Badge](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
} 
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== '' || 'None') {
    return `\n[License](#license)\n`
  }
  return ''
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '' || 'None') {
    return `## License
    \n This project uses a ${license}\n`
  }
  return ''
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  # ${data.description}

  ## Table of Contents
  # ${data.toc}

  ## Installation
  # ${data.installation}

  ## Usage
  # ${data.usage}

  ## Credit
  # ${data.credit}

  ## License
  # ${data.license}

  ## Contributions
  # ${data.contributing}

  ## Tests
  # ${data.tests}

  ## Questions
  # ${data.questions}
`;
}

module.exports = generateMarkdown;
