import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'

import { AppModule } from './app.module'

async function startServer(): Promise<void> {
  try {
    const app = await NestFactory.create(AppModule)
    const port = process.env.PORT || 4200

    app.enableCors({
      credentials: true,
      origin: true
    })
    app.use(cookieParser())

    app.listen(port).then(() => {
      console.log(`Server start on port: ${port}`)
    })
  } catch (err) {
    throw err
  }
}

startServer().then(() => console.log('Server is OK'))
