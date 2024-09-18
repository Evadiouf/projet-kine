// src/contact/contact.service.ts
import { Injectable } from '@nestjs/common';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  async handleContactForm(contactDto: ContactDto) {
    // Ici vous pouvez envoyer un email ou stocker le message dans une base de données
    console.log('Message reçu : ', contactDto);
    return { message: 'Message reçu avec succès !' };
  }
}
