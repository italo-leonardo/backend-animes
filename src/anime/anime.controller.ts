// src/anime/anime.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Controller('animes') // Prefixo de rota: /animes
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  // POST /animes - Criar novo anime
  @Post()
  create(@Body() createAnimeDto: CreateAnimeDto) {
    return this.animeService.create(createAnimeDto);
  }

  // GET /animes - Listar todos
  @Get()
  findAll() {
    return this.animeService.findAll();
  }

  // GET /animes/:id - Buscar por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeService.findOne(id);
  }

  // PUT /animes/:id - Atualizar (corrigido)
  @Put(':id') // <--- ESSE ERA O PROBLEMA (os dois pontos)
  update(
    @Param('id') id: string,
    @Body() updateAnimeDto: UpdateAnimeDto,
  ) {
    return this.animeService.update(id, updateAnimeDto);
  }

  // DELETE /animes/:id - Remover
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeService.remove(id);
  }
}