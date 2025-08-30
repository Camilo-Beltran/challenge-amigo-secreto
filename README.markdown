# Amigo Secreto

![Amigo Secreto Banner](img/amigo-secreto.png)<br>Amigo Secreto es una aplicación web que permite a los usuarios organizar un sorteo de "Amigo Secreto" de manera sencilla y divertida. Los usuarios pueden agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién es el "Amigo Secreto". La aplicación está diseñada con una interfaz amigable y accesible, utilizando HTML, CSS y JavaScript.

## Características

- **Agregar Nombres**: Ingresa nombres de amigos mediante un campo de texto y un botón "Añadir". También se puede usar la tecla Enter.
- **Validación de Entrada**: Alerta si el campo está vacío o si el nombre ya está en la lista.
- **Visualización de Lista**: Muestra los nombres ingresados en una lista visible en la página.
- **Sorteo Aleatorio**: Selecciona un nombre al azar de la lista y lo muestra como el "Amigo Secreto".
- **Diseño Responsivo**: Interfaz optimizada para dispositivos móviles y de escritorio, con estilos modernos y fuentes personalizadas (Inter y Merriweather).

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/camilo-beltran/challenge-amigo-secreto.git
   ```
2. Navega al directorio del proyecto:

   ```bash
   cd challenge-amigo-secreto
   ```
3. Abre el archivo `index.html` en un navegador web o sirve los archivos usando un servidor local (por ejemplo, con `live-server` o cualquier servidor HTTP).

## Uso

1. Abre la aplicación en el navegador (puedes visitar el sitio desplegado en https://camilo-beltran.github.io/challenge-amigo-secreto/).
2. Escribe el nombre de un amigo en el campo de texto y haz clic en "Añadir" o presiona Enter.
3. Repite el proceso para agregar más nombres a la lista.
4. Haz clic en el botón "Sortear Amigo" para seleccionar un nombre al azar.
5. El resultado del sorteo aparecerá debajo de la lista de nombres.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos personalizados y diseño responsivo.
- **JavaScript**: Lógica para agregar nombres, validar entradas y realizar el sorteo aleatorio.
- **Google Fonts**: Fuentes Inter y Merriweather para una tipografía elegante.
- **ARIA Attributes**: Para mejorar la accesibilidad de la aplicación.

## Estructura del Proyecto

```
challenge-amigo-secreto/
├── img/
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
├── style.css
├── app.js
├── index.html
└── README.md
```

## Demo

Puedes probar la aplicación en vivo aquí: Amigo Secreto

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar la aplicación, por favor:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Envía tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT.

---

Desarrollado por Camilo Beltran.
