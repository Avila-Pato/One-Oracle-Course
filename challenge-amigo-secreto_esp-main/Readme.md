# Juego de Amigo Secreto 🎁

## Ver Proyecto
Puedes visualizar el proyecto haciendo clic en el siguiente enlace:  
[Challenge Amigo Secreto](https://challenge-amigo-secreto-esp-main-4omswxa76-avila-patos-projects.vercel.app/)

## Descripción del Proyecto
Este proyecto demuestra un juego de amigo secreto en el que se pueden agregar diferentes participantes y realizar un sorteo para asignar un amigo secreto a cada uno de ellos. Es una aplicación interactiva y sencilla que utiliza HTML, CSS y JavaScript.

## Tecnologías Utilizadas
- **HTML**
- **CSS**
- **JavaScript**

## Cómo Funciona JavaScript y la Lógica Dentro del Programa

1. **Creación de Arreglo de Participantes**  
   Se inicia con un arreglo vacío para almacenar los nombres de los participantes.

2. **Función `agregarAmigo`**  
   Permite agregar un nombre a la lista de participantes.  
   - Se verifica si el nombre ya está en la lista.  
   - También se valida si el campo está vacío antes de agregarlo.

3. **Función `actualizarLista`**  
   - Captura el contenedor del DOM donde se mostrarán los nombres de los participantes.  
   - Agrega los nombres en el contenedor HTML directamente desde JavaScript.  
   - Incluye una constante `botonEliminar` que permite eliminar un amigo de la lista.

4. **Función `eliminarAmigo`**  
   Implementa la lógica necesaria para eliminar un amigo de la lista de participantes.

5. **Función `sortearAmigo`**  
   - Realiza el sorteo para asignar un amigo secreto a cada participante.  
   - Verifica si hay suficientes participantes para realizar el sorteo.

6. **Función `mostrarResultado`**  
   - Muestra el resultado del sorteo para cada participante en un elemento `li` dentro de una lista.  
   - Los resultados se presentan en una caja flotante.  

7. **Función para Cerrar la Caja Flotante**  
   Permite cerrar la ventana emergente que muestra los resultados del sorteo.

   #Referencia 1
   ![Screenshot_20-1-2025_211953_127 0 0 1](https://github.com/user-attachments/assets/450f427c-76bb-447f-84ce-5e71242fe134)
   #Referencia 2
   ![Screenshot_20-1-2025_212035_127 0 0 1](https://github.com/user-attachments/assets/57cda5ab-e624-400b-b912-d48574c099da)


