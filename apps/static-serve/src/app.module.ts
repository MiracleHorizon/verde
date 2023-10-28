import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { StaticModule } from './static.module'

@Module({
  imports: [ConfigModule.forRoot(), StaticModule]
})
export class AppModule {}
