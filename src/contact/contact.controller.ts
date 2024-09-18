// src/contact/contact.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';


@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async handleContact(@Body() contactDto: ContactDto) {
    return this.contactService.handleContactForm(contactDto);
  }
}
