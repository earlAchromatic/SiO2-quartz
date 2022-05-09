import fs from 'node:fs'
import Koa from 'koa'
import Router from '@koa/router'
import bodyParser from 'koa-bodyparser'

const port = '4003'
const fileLocation = process.argv[2]

const app = new Koa()

const router = new Router()

router.get('/', (ctx) => {
  console.log(ctx)
  //
  ctx.status = 200
})

router.post('/write-token', async (ctx) => {
  const payload = await ctx.request.body
  console.log(payload)
})

app.use(bodyParser())
app.use(router.routes())

app.listen(port)
console.log(`app listening on port: ${port}`)

