
export interface descLugar {
    nombre: string;
    imagen: string;
    ubicacion: string;
}

let lugares: descLugar[] = [];
export class Lugar {
         lugar: descLugar = {
           nombre: "",
           imagen: "",
           ubicacion: ""
         };
         constructor(nombre: string, ubicacion: string, imagen: string) {
           this.lugar.nombre = nombre;
           this.lugar.ubicacion = ubicacion;
           this.lugar.imagen = imagen;
         }
         createLugar() {
           lugares.push(this.lugar);

           console.log(lugares);
         }
         getLugaresListado() {
           return lugares;
         }
         getLugar() {
           return this.lugar;
         }
       }