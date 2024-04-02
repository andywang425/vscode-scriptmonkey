import * as path from 'path'
import * as Mocha from 'mocha'
import { globSync } from 'glob'

export function run(): Promise<void> {
  // Create the mocha test
  // @ts-ignore
  const mocha = new Mocha.default({
    ui: 'tdd',
    color: true
  })

  const testsRoot = path.resolve(__dirname, '..')

  return new Promise((c, e) => {
    globSync('**/**.test.js', { cwd: testsRoot }).forEach((f) => {
      // Add files to the test suite
      mocha.addFile(path.resolve(testsRoot, f))
    })

    try {
      // Run the mocha test
      mocha.run((failures: number) => {
        if (failures > 0) {
          e(new Error(`${failures} tests failed.`))
        } else {
          c()
        }
      })
    } catch (err) {
      console.error(err)
      e(err)
    }
  })
}
