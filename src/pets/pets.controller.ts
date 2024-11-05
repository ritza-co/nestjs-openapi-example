import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Cat } from './entities/cat.entity';
import { Dog } from './entities/dog.entity';
import { CreatePetValidationPipe } from './create-pet-validation-pipe';
import { CreateCatDto } from './dto/create-cat.dto';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @UsePipes(CreatePetValidationPipe)
  async create(@Body() dto: CreateCatDto | CreateDogDto): Promise<Cat | Dog> {
    return this.petsService.create(dto);
  }

  @Get('cats/:id')
  findOneCat(@Param('id') id: string): Cat {
    return this.petsService.findOneCat(+id);
  }

  @Get('dogs/:id')
  findOneDog(@Param('id') id: string): Dog {
    return this.petsService.findOneDog(+id);
  }
}
