import { IsEnum, IsInt, IsString } from 'class-validator';
import { CatEnvironment } from '../pets.types';

export class Cat {
  /**
   * The type of pet
   * @example 'cat'
   */
  @IsEnum(['cat'])
  readonly type: 'cat';

  /**
   * The name of the cat
   * @example 'Panama'
   */
  @IsString()
  readonly name: string;

  /**
   * The age of the cat
   * @example 1
   */
  @IsInt()
  readonly age: number;

  /**
   * The breed of the cat
   * @example 'British Short Hair'
   */
  @IsString()
  readonly breed: string;

  /**
   * Living environment of the cat
   * @example 'indoor'
   */
  @IsEnum(CatEnvironment, {
    message: `environment must be one of the following values: ${Object.values(CatEnvironment).join(', ')}`,
  })
  readonly environment: CatEnvironment;
}
