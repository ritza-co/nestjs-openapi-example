import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { Dog } from './entities/dog.entity';
import { CatEnvironment, DogSize } from './pets.types';

@Injectable()
export class PetsService {
  private readonly cats: Cat[] = [
    {
      type: 'cat',
      name: 'Shadow',
      age: 8,
      breed: 'Bombay',
      environment: CatEnvironment.Indoor,
    },
  ];
  private readonly dogs: Dog[] = [
    {
      type: 'dog',
      name: 'Lucky',
      age: 4,
      breed: 'poodle',
      size: DogSize.Small,
    },
  ];

  create(pet: Cat | Dog): Cat | Dog {
    if ('environment' in pet) {
      // mock database query
      this.cats.push(pet);
    } else {
      // mock database query
      this.dogs.push(pet);
    }
    return pet;
  }

  findOneCat(id: number): Cat {
    console.log({ id });
    return this.cats[0];
  }

  findOneDog(id: number): Dog {
    console.log({ id });
    return this.dogs[0];
  }
}
