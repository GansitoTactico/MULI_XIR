# Notas de Implementación - Trazabilidad de Procesos

Este documento contiene los pasos necesarios para completar la implementación del nuevo módulo.

## 1. Dependencias Requeridas

Ejecuta los siguientes comandos en las carpetas correspondientes:

**Backend (en `c:\Users\MrLeo\MULI_XIR`)**
```bash
npm install qrcode
```

**Frontend (en `c:\Users\MrLeo\MULI_XIR\MULI_XIR_FRONTEND`)**
No se requieren nuevas dependencias.

## 2. Configuración Manual (Crítico)

Una vez que el código esté implementado, deberás realizar los siguientes pasos manualmente:

### a. Crear Formularios en Google Forms
Crea cuatro formularios de Google, uno para cada rol:
- Productor
- Distribuidor
- Tienda
- Cliente

### b. Añadir Campo Oculto para `processCode`
En **cada uno** de los cuatro formularios, añade una pregunta de "Respuesta corta" que servirá para recibir el código del proceso. **Anota el ID de esta pregunta** (lo necesitarás para el siguiente paso y para el código). Puedes encontrar el ID inspeccionando el formulario en vivo.

### c. Actualizar el Código del Backend
En el archivo `src/controllers/process_controllers.js` que crearé, busca la función `generateFormUrls` y reemplaza los valores `FORM_ID_...` y `entry.123456789` con tus IDs reales.

### d. Configurar Google Apps Script
1. En cada formulario, ve a `Editor de secuencias de comandos`.
2. Pega el código de `Google Apps Script` proporcionado en el plan.
3. **Actualiza la variable `webhookUrl`** a la URL de tu backend (ej: `https://tu-dominio.com/api/webhooks/google-forms`).
4. **Actualiza los `FORM_ID_...`** en la función `getFormRole`.
5. **Actualiza los `entry. ...`** en la función `extractProcessCode` con los IDs que anotaste en el paso 'b'.
6. Crea un **activador (trigger)** para que la función `onSubmit` se ejecute `Al enviar el formulario`.

