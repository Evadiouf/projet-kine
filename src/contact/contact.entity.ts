import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Déclare cette classe comme une entité de TypeORM
export class Contact {
  @PrimaryGeneratedColumn() // Génère automatiquement un identifiant unique pour chaque entrée
  id: number;

  @Column({ length: 100 }) // Colonne pour le nom avec une longueur maximale de 100 caractères
  name: string;

  @Column({ length: 150 }) // Colonne pour l'adresse email avec une longueur maximale de 150 caractères
  email: string;

   @Column('text') // Colonne pour le message, de type texte pour permettre de longs messages
  message: string;
}
