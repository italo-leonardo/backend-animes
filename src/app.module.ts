// backend-animes/src/app.module.ts
import { Module } from '@nestjs/common';
import { AnimeController } from './anime/anime.controller';
import { AnimeService } from './anime/anime.service';
import { PrismaService } from './prisma.service';

@Module({
  controllers: [AnimeController],
  providers: [AnimeService, PrismaService], // Adicione ambos os serviços
})
export class AppModule {}