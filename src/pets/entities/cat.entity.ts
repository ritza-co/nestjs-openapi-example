import { IsEnum, IsInt, IsString } from 'class-validator';
import { CatEnvironment } from '../pets.types';

export class Cat {
  @IsEnum(['cat'])
  readonly type: 'cat';

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsEnum(CatEnvironment, {
    message: `environment must be one of the following values: ${Object.values(CatEnvironment).join(', ')}`,
  })
  readonly environment: CatEnvironment;
}
