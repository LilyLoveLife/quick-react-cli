#!/usr/bin/env node

/*
 * @Description: 
 * @version: 0.0.1
 * @Author: Lily
 * @Date: 2021-02-28 12:01:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-28 20:13:07
 */

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')

const templateUrl = 'LilyLoveLife/my-react-template'
const spinner = ora("Downloading...")

program.usage('[project-name]').parse(process.argv)

let projectName = program.args[0]
if (!projectName) {
    console.log(chalk.red('\n ProjectName should not be empty! \n '))
    return
}

spinner.start()
download(
    templateUrl,
    projectName,
    err => {
        if (err) {
            spinner.fail()
            console.log(chalk.red(`Fail to create project. ${err}`))
            return
        }
        spinner.succeed()
        console.log(chalk.cyan('\n Completed creating project!'))
        console.log(chalk.cyan(`\n To get started,  cd ${projectName} \n`))
    }
)