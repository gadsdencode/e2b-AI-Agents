import { Session } from '@e2b/sdk'

const session = await Session.create({
  id: 'Nodejs',
  apiKey: process.env.E2B_API_KEY,
})

const npmInit = await session.process.start({
  cmd: 'npm init -y'
})
await npmInit.kill() // $HighlightLine
// There will be no output because we immediately kill the `npm_init` process
console.log(npmInit.output.stdout)

await session.close()
