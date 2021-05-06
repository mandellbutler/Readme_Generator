//Dependencies==============================

//Collects user inputs
const inquirer = require('inquirer');
//Writes inputs to file
const fs = require('fs');

//=======================DATA
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
      },
      {
        name: "description",
        type: "input",
        message: "Please provide a description of the project:",
      },
      {
        name: "installation",
        type: "input",
        message: "Please provide installation instructions:",
      },
      {
        name: "usage",
        type: "input",
        message: "Please provide instructions (and examples) of project's use:",
      },
      {
        name: "contributing",
        type: "input",
        message: "Please list any contributors to your project:",
      },
      {
        name: "license",
        type: "list",
        message: "Protect your project! Choose the type of License you would like to include:",
        choices: ["Apache License 2.0", "Mozilla Public License 2.0", "MIT", "ISC License", "GNU GPLv2"]
      },
      {
        name: "tests",
        type: "input",
        message: "Please provide tests for your project and examples of how to run them:",
      },
      {
        name: "username",
        type: "input",
        message: "Please provide your Guthub username:",
      },
      {
        name: "email",
        type: "input",
        message: "Please provide your email address:",
      },
];
const renderQuestions = (questions) => {
    inquirer
        .prompt(questions)
        .then(answers => {
            renderReadme(answers);
        });
};

const renderReadme = ({
    title,
    description,
    installation,
    usage,
    contributing,
    license,
    tests,
    username,
    email,
  }) => {
    const templateReadMe = `
    ## ${title}
    
    ## Table of Contents
    *Description
    *Installation
    *Usage
    *Contributing
    *License
    *Tests

    
    ## DESCRIPTION
    
    ${description}


    
    ## INSTALLATION
    
    ${installation}


    
    ## USAGE
    
    ${usage}


    
    ## CONTRIBUTING
    
    ${contributing}


    
    ## LICENSE
    
    ${license}


    
    ## TESTS
    
    ${tests}

    
    
    ## QUESTIONS

    Please feel free to contact me, should you have any questions!

    Github: ${"https://github.com/" + username}

    Email: ${email}

    `;
    fs.writeFile("README.md", templateReadMe, "utf8", (err) => 
        err ? console.log(err) : console.log("And then, God created a READ.me!")
    );
};

// init();
renderQuestions(questions);