require('mocha/mocha')

export function run(): Promise<void> {
  // Create the mocha test

  return new Promise((c, e) => {
    mocha.setup({
      ui: 'tdd',
      reporter: undefined,
      color: true
    })

    const importAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r)
    importAll(require.context('..', true, /\.test$/))

    try {
      console.log('mocha test start')
      // Run the mocha test
      mocha.run((failures) => {
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
