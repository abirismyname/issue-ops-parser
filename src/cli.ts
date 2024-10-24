import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { run } from './main.js'

const argv = yargs(hideBin(process.argv))
  .option('body', {
    type: 'string',
    description: 'The issue body to parse',
    demandOption: true
  })
  .option('template', {
    type: 'string',
    description: 'The issue form template file name',
    demandOption: true
  })
  .option('workspace', {
    type: 'string',
    description: 'The path where the repository has been cloned',
    demandOption: true
  })
  .argv

run(argv.body, argv.template, argv.workspace)
  .then(() => {
    console.log('CLI execution completed successfully.')
  })
  .catch((error) => {
    console.error('Error during CLI execution:', error)
    process.exit(1)
  })

export default argv
