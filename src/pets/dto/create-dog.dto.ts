import { IsEnum, IsInt, IsString } from 'class-validator';
import { DogSize } from '../pets.types';

export class CreateDogDto {
  @IsEnum(['dog'])
  readonly type: 'dog'; // Add a type field to discriminate

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsEnum(DogSize, {
    message: `Size must be one of the following values: ${Object.values(DogSize).join(', ')}`,
  })
  readonly size: DogSize;
}
