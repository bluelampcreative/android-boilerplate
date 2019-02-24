#!/usr/bin/env node

const chalk = require('chalk'); 
const clear = require('clear');
const figlet = require('figlet'); 
const inquirer = require('./lib/inquirer');
const CLI = require('clui');
const Spinner = CLI.Spinner;


const help = `
    Welcome to Android Boilerplate! 
    
    usage:
        adb <command> <option>
    
    Command:
        - new:      (create a new project)
        ...

    Options:
        - mvvm
        - mvvm-cca (MVVM with Clean Code Arcitecture)
        - mvi
        - redux
        - mvp
`
clear()

console.log(
    chalk.yellow(
        figlet.textSync('ABP', {horizontalLayout: 'full'})
    )
)
console.log(
    chalk.blue('Android boilerplate CLI')
)

const run = async () => {
  const projectName = await inquirer.askProjectName();
  createProject(projectName)
}

//this kicks it off
run();

function createProject(projectName) {
    const status = new Spinner('Creating your project')
    status.start()

    setTimeout(() => {
        try {
            //pause here while project is created
            console.log(`\n The ${projectName.archType} Android project ${projectName.name} has been created`)
        } catch(exception) {
            console.log(exception)
        } finally {
            status.stop()
        }
    }, 3000)
}

function logError(error) {
    console.log(chalk.red(error))
} 

function acceptCommand(command, option) {
    switch(command){
        case 'new':
            console.log(`create a new template`)
            acceptOption(option)
            break; 
        default:
            logError('Please enter an acceptable command')
            console.log(help)
    }
}

function acceptOption(options) {
    switch(option) {
        case 'mvvm':
            console.log(`mvvm`)
            break; 
        case 'mvvm-cca':
            console.log('mvvm-cca')
            break;
        case 'mvi':
            console.log('mvi')
            break;
        case 'redux':
            console.log('redux')
            break;
        case 'mvp':
            console.log('mvp')
            break;
        default:
            logError('Please enter an acceptable option')
            console.log(help)
    }
}
