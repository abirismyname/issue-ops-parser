import { jest } from '@jest/globals'
import { execSync } from 'child_process'
import path from 'path'

describe('CLI', () => {
  const cliPath = path.resolve(__dirname, '../dist/cli.js')

  it('should parse issue body correctly', () => {
    const result = execSync(
      `node ${cliPath} --body "### Test\nTest value" --template "example.yml" --workspace "${process.cwd()}"`
    ).toString()

    expect(result).toContain('CLI execution completed successfully.')
  })

  it('should handle missing template', () => {
    const result = execSync(
      `node ${cliPath} --body "### Test\nTest value" --template "missing.yml" --workspace "${process.cwd()}"`
    ).toString()

    expect(result).toContain('Error during CLI execution:')
  })
})
