import { IsEnum, IsInt, IsString } from 'class-validator';
import { DogSize } from '../pets.types';

export class Dog {
  /**
   * The type of pet
   * @example 'dog'
   */
  @IsEnum(['dog'])
  readonly type: 'dog';

  /**
   * The name of the dog
   * @example 'Fluffy'
   */
  @IsString()
  readonly name: string;

  /**
   * The age of the dog
   * @example 4
   */
  @IsInt()
  readonly age: number;

  /**
   * The breed of the dog
   * @example 'Alaskan Malamute'
   */
  @IsString()
  readonly breed: string;

  /**
   * The Size of the dog'
   * @example 'medium'
   */
  @IsEnum(DogSize, {
    message: `Size must be one of the following values: ${Object.values(DogSize).join(', ')}`,
  })
  readonly size: DogSize;
}
