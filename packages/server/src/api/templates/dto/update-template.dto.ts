import { Trim } from 'class-sanitizer';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { TemplateType, WebhookData } from '../entities/template.entity';

export class UpdateTemplateDto {
  @Trim()
  @IsNotEmpty()
  @MaxLength(255)
  public name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(2000)
  public subject?: string;

  @IsOptional()
  @IsEmail({}, { each: true })
  public cc?: string[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public text?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public style?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(2000)
  public slackMessage?: string;

  @IsNotEmpty()
  public type: TemplateType;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(2000)
  public smsText?: string;

  @IsObject()
  @IsOptional()
  public webhookData?: WebhookData;

  @IsObject()
  @IsOptional()
  public modalState?: Record<string, unknown>;
}
