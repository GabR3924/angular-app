import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

    hermanoGrande?: string;
    hermanoPequeno?: string;

    getHermanoGrande(): string {
      return this.hermanoGrande || '';
    }

    setHermanoGrande(hermano: string) {
      this.hermanoGrande = hermano;
    }

    getHermanoPequeno(): string {
      return this.hermanoGrande || '';
    }

    setHermanoPequeno(hermano: string) {
      this.hermanoPequeno = hermano;
    }
    

    saludar(hermano: string) {
      console.log(`Hola ${hermano}`);
    }

    preguntarPorHijo():string{
      return 'como esta tu hijo?';
    }

  constructor() { }
}