1 // Validar Nombre
/**Verificar que es una string
 * Verificar que solo hay letras de la abecedario en la string(que no haya numeros ni caracteres especiales.)
 
 */
/**
 * Fución para validar un texto y que no sea vacio 
 * @param {string} nombre 
 * @return {boolean} boolean true or false
 */
function validarNombre(nombre) {
        const name = nombre.trim();//para eliminar espacios delante y detras del texto 
        // console.log ("sin limpia: ", nombre, "y limpio: ", name)
        const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ] +)*$/;
        //if(!pattern.test(input.value)){ 
        if (typeof name !== 'string' || name === "" || !pattern.test(name)) {/*El pattern.test(name)se utiliza para que el usuario no meta caracteres eje:+?``[] */
                console.log("entro en el if")

                return false
        } else {
                return true
        }

}
console.log(validarNombre(" Dulce "))
console.log(validarNombre("         "))
console.log(validarNombre(" 5345  433234 "))

/**!==: Con esto comprobamos que no sea una string 
 * ===: Inpide que no entren nombre vacios.
*/



2 // -Validar email
/**Que la arroba este enmedio de una palabara eleplo(pepito@gmail).
 * Que termine en punto y en la extecion del servidor.
 * restringir los servidores de email o verificar el email por otro lado.
*/

function validarEmail(email) {
        const correo = email.trim();//con trim elimina los espacios sobrantes delante y detras del texto
        const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        //if(!pattern.test(input.value)){ 
        if (typeof correo !== 'string' || correo === "" || !pattern.test(correo)) {/*El pattern.test(name)se utiliza para que el usuario no meta caracteres eje:+?``[] */
                console.log("entro en el if")

                return false
        } else {
                return true
        }

}
console.log(validarEmail(" correo@gmail.com "))
console.log(validarEmail("    "))
console.log(validarEmail(" m3ra   i9olp "))


3. //validar URL

function validarurl(miurl) {
        const url = miurl.trim();//con trim elimina los espacios sobrantes delante y detras del texto
        const pattern =  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        //if(!pattern.test(input.value)){ 
        if (typeof url !== 'string' || url === "" || !pattern.test(url)) {/*El pattern.test(name)se utiliza para que el usuario no meta caracteres eje:+?``[] */
                console.log("entro en el if")

                return false
        } else {
                return true
        }

}
console.log(validarurl(" https://www.lawebdelprogramador.com/codigo/JavaScript/2360-funcion-para-validar-si-una-url-es-correcta.html"))
console.log(validarurl("    "))
console.log(validarurl(" ww.lawebdelprogramador.com/codigo/JavaScript/2360-funcion-para-validar-si-una-url-es "))


4. // Validar Fecha (Dia,mes y año)
function validarFecha(fecha1){
        const fecha = fecha1.trim();
        const pattern = /^\d{4}([\-/. ])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/
        if (typeof fecha !== 'string'|| fecha === "" || !pattern.test(fecha)){
 console.log("entro en el if")
        return false
        } else {
        return true
        }
        }
        console.log(validarFecha(" 2023/04/23 "))
        console.log(validarFecha("  "))
        console.log(validarFecha(" 09-04-2023 "))
        document.querySelector("[type='date']");

function mirarFecha(){
        console.log(document.querySelector("[type=date]").value);
}
5. // Validar tiempo(Hora)
function validarHora(hora1){
        const hora = hora1.trim();
        const pattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (typeof hora !== 'string'|| hora === "" || !pattern.test(hora)){
            console.log("entro en el if")
            return false
        } else {
            return true
        }
    }
        console.log(validarHora(" 2023/04/09 "))
        console.log(validarHora("  "))
        console.log(validarHora(" 09/04/2023 "))


5 // Validar fecha control


6 // Validar mes
7 // Vlidar semana
8 // Validar Numero
9 // Validar el tiempo en formato de hora
10 // Validar intervalo
11 // Validar telefono
/** Verficar que es un numero 
 * Limitar la entrada de numeros a 9
 */
12 // Validar termino de busqueda
13// Validar color favorito