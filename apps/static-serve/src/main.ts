import {NestFactory} from '@nestjs/core'

import {AppModule} from './app.module'

async function startServer(): Promise<void> {
  try {
    const app = await NestFactory.create(AppModule)
    const port = process.env.PORT || 4201

    await app.listen(port)
  } catch (err) {
    throw err
  }
}

startServer().then(() => console.log('Static serve server is OK'))
