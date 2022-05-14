import { createRequire } from 'module'
import path, from 'path'
import {fileURLToPath} from 'url';

import fs from 'node:fs'
import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'
const require = createRequire(import.meta.url)
const token = require('../../src/styles/design-tokens.json')

const port = '4003'
// const fileLocation = process.argv[2]

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileLocation = path.join(__dirname, '../../src/styles/design-tokens.json')
const UnoConfigLocation = path.join(__dirname, '../../unocss.config.ts')
const cssMainLocation = path.join(__dirname, '../../src/styles/main.css')

const app = new Koa()

const router = new Router()

router.get('/', (ctx) => {
  console.log(ctx)
  //
  ctx.status = 200
})

router.post('/write-token', async (ctx) => {
  const payload = await ctx.request.body
  const min = payload.min
  const max = payload.max

  console.log(fileLocation)
  token.viewports.min = min
  token.viewports.max = max
  console.log(token)

  fs.writeFileSync(fileLocation, JSON.stringify(token))

  // simulate save unocss.config.js
  let unoConfig = fs.readFileSync(UnoConfigLocation).toString()
  fs.writeFileSync(UnoConfigLocation, unoConfig)
  // simulate save main.css
  let cssMain = fs.readFileSync(cssMainLocation).toString()
  fs.writeFileSync(cssMainLocation, cssMain)
  
  ctx.status = 200
})

app.use(bodyParser())
app.use(router.routes())

app.listen(port)
console.log(`app listening on port: ${port}`)

