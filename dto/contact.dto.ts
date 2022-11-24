import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  IsString,
  IsOptional,
  ValidateIf,
} from "class-validator";
import { Transform, TransformFnParams } from "class-transformer";

export class ContactDTO {
  @IsString()
  @IsNotEmpty()
  public turnstileToken!: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(300)
  public name!: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @ValidateIf((_, value) => !!value)
  @IsEmail()
  @MaxLength(320)
  public email!: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  public phone!: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(3000)
  public message!: string;
}
