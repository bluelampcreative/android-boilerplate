const inquirer   = require('inquirer');

module.exports = {
    askProjectName: () => {
        const questions = [
            {
                name: 'projectName',
                type: 'input',
                message: 'Enter a name for your project:',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a valid project name.';
                    }
                } 
            }, 
            {
                name: 'packageName',
                type: 'input',
                message: 'Enter a package name for your project:',
                validate: function( value ) {
                    //replace with a regex expression the accurately validate. 
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter a valid package name.';
                    }
                } 
            },
            {
                name: 'archType',
                type: 'list',
                message: 'Choose the Architecture type',
                choices: ['MVVM', 'MVVM/CCA', 'MVI', 'REDUX', 'MVP']
            }
        ];
        return inquirer.prompt(questions);
    }
}