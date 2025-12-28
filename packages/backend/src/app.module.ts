import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // Add other modules here as they're created
    // AuthModule,
    // UsersModule,
    // InterviewsModule,
    // VerificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

