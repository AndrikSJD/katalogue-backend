import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString({ message: 'Category name must be a string' })
  name: string;
}
