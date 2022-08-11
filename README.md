## Añadir UFFR Extension al navegador Google Chrome

Luego de que clones el proyecto debes añadirlo como una extension en Chrome

1. Click en los **3 puntitos** arriba a la derecha.
2. Click en **Mas herramientas** y luego en Extensiones.
3. Activa el **Modo de desarrollador** arriba a la derecha.
4. Click en **Cargar descomprimida** arriba a la izquierda.
5. Selecciona la carpeta del proyecto clonado (deberia llamarse **uffr-extension**).
6. ¡Listo! Aparecera el icono de la extension en la barra de Chrome.

---

## Uso de UFFR Extension

Vamos a enseñarte como utilizar la extension para eliminar las funciones Javascript que no son utilizadas por tu pagina web.
Para hacerlo mas sensillo, vamos a analizar solo las funciones utilizadas en la carga de cualquiera (pero solo una) de las vistas de tu web.

1. Carga una vista de tu pagina web, por ejemplo el home.
2. Click en el icono de UFFR Extension. Se abrira la pestaña de la extension correspondiente para esta vista.
3. Selecciona en el menu de la izquierda cada JS que quieras optimizar.
4. Click en **Instrument JSs**. Se descargara un zip con todos los archivos JSs instrumentados.
4. Ahora debemos reemplazar todos los archivos JS originales por los instrumentados. Podemos utilizar la extension **Requestly** para facilitar la tarea.
5. Recarga la vista de tu web elejida para optimizar. Asegurate de que se hayan cargado los nuevos archivos JS.
6. Nuevamente en la pestaña de la extension, click en **Optimize JSs**. Se descargara un zip con todos los archivos JSs optimizados.
7. Debemos reemplazar todos los archivos JS por los optimizados, teniendo el recaudo de dejar el JS padre (con el sufijo **_opt**) en la misma ubicacion que los JS hijos (llamados igual que el padre pero con un signo **$** en su nombre).
8. Para probar que se optimizo de manera correcta, debes recargar la vista de tu web y probar que todo funciona correctamente.