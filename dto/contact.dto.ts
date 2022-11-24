import { IsNotEmpty, IsEmail, IsNumber, MinLength, MaxLength, Min, Max } from "class-validator";

export class ContactDTO {
  @IsNotEmpty()
  public turnstileToken!: string;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  public name!: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(320)
  public email!: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1000)
  @Max(999999999999999)
  public phone!: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(3000)
  public message!: string;
}
