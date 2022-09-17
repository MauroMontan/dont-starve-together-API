import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Collection } from '../enums/enums';

export class CreateSkinDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  bigportrait: string;

  @ApiProperty({ enum: Collection, enumName: 'Skin collection' })
  @IsString()
  collection: Collection;

  @ApiProperty()
  @IsInt()
  survivorId: number;
}
