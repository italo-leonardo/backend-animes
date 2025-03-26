import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAnimeDto } from '../anime/dto/create-anime.dto';
import { UpdateAnimeDto } from '../anime/dto/update-anime.dto';

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  create(createAnimeDto: CreateAnimeDto) {
    return this.prisma.anime.create({ data: createAnimeDto });
  }

  findAll() {
    return this.prisma.anime.findMany();
  }

  findOne(id: string) {
    return this.prisma.anime.findUnique({ where: { id } });
  }

  update(id: string, updateAnimeDto: UpdateAnimeDto) {
    return this.prisma.anime.update({
      where: { id },
      data: updateAnimeDto,
    });
  }

  remove(id: string) {
    return this.prisma.anime.delete({ where: { id } });
  }
}