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
  @IsNotEmpty({ message: "Invalid captcha, please try again" })
  public turnstileToken!: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @IsNotEmpty({ message: "Invalid value for name" })
  @MinLength(1, { message: "Please enter your name" })
  @MaxLength(300, { message: "Name is limited to 300 characters" })
  public name!: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @ValidateIf((_, value) => !!value)
  @IsEmail({}, { message: "Please enter a valid email" })
  @MaxLength(320, { message: "Email is too long" })
  public email!: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @IsNotEmpty({ message: "Invalid phone number" })
  @MinLength(1, { message: "Please enter your phone number" })
  @MaxLength(20, { message: "Invalid phone number" })
  public phone!: string;

  @IsString()
  @Transform(({ value }: TransformFnParams) => value?.replace(/\s+/g, " ").trim())
  @IsNotEmpty({ message: "Invalid value for message" })
  @MinLength(1, { message: "Please type a message" })
  @MaxLength(3000, { message: "Message is limited to 3000 characters" })
  public message!: string;
}
