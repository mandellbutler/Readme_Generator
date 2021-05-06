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
    fs.writeFile("READ.me", templateReadMe, "utf8", (err) => 
        err ? console.log(err) : console.log("And then, God created a READ.me!")
    );
};

// init();
renderQuestions(questions);

//prompt user for information to generate readme file

//===============
// inquirer
//   .prompt(questions)
//   .then(answers => {
//       fs.writeFile("answers.txt", JSON.stringify(answers), "utf8", (err) => {
//           if (err) console.log(err);
//             console.log("Success!")
//       })
//     // Use user feedback for... whatever!!
//   })
//   .catch(error => {
//     if(error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
// });


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README
        //PROMPT for INPUT: Title
        //PROMPT for INPUT: Description
        //PROMPT for INPUT: Table of Contents
                // WHEN I click on the links in the Table of Contents
                // THEN I am taken to the corresponding section of the README
        

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        //PROMPT for CHOICES: License

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

        //PROMPT for INPUT: Installation
        //PROMPT for INPUT: Usage
        //PROMPT for INPUT: Contributing
        //PROMPT for INPUT: Tests


// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        //PROMPT for INPUT: Questions








