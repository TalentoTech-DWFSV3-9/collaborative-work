# **Instructivo de Reglas para el Trabajo en el Proyecto**

## **Objetivo**
Este documento establece las reglas y el flujo de trabajo para contribuir al proyecto en GitHub. Estas directrices ayudarán a mantener la calidad del código y facilitarán la colaboración efectiva entre los miembros del equipo.

## **Protección de Ramas**
Se ha configurado la protección de la rama `main` para asegurar que solo se fusionen cambios revisados y aprobados. A continuación se detallan las reglas aplicadas:

### **1. Reglas de Protección para la Rama `main`**
- **Requerir un Pull Request (PR) antes de hacer Merge:**
  - Todos los cambios realizados en la rama `main` deben ser propuestos a través de un pull request. No se permitirá el "push" directo a esta rama.

- **Requerir Aprobaciones:**
  - Cada pull request debe recibir al menos **una aprobación** de otro miembro del equipo antes de poder fusionarse a `main`.

- **Requerir que las Revisiónes sean Resueltas:**
  - Todas las conversaciones y comentarios en el pull request deben ser resueltos antes de que se permita la fusión.

### **2. Revisión de Código**
- **Creación de Pull Requests:**
  - Los miembros del equipo deben crear un pull request para proponer cambios en `main`. Asegúrate de describir claramente los cambios realizados y cualquier contexto necesario.

- **Revisiones:**
  - Un miembro del equipo diferente debe revisar el pull request, asegurándose de que el código cumple con los estándares de calidad y que se han resuelto todas las preguntas y comentarios.
  
- **Fusión:**
  - Una vez aprobado el pull request, el autor del PR (o el revisor, si está de acuerdo) puede fusionar los cambios a `main`.

### **3. Flujo de Trabajo General**
1. **Crear una Nueva Rama:**
   - Al comenzar a trabajar en una nueva tarea, crea una nueva rama desde `main`. Utiliza una nomenclatura clara para el nombre de la rama, por ejemplo: `feature/nombre-de-la-tarea` o `bugfix/nombre-del-bug`.

2. **Realizar Cambios y Hacer Commits:**
   - Realiza los cambios necesarios en tu rama local. Haz commits con mensajes claros que describan los cambios realizados.

3. **Abrir un Pull Request:**
   - Cuando estés listo para proponer tus cambios, abre un pull request hacia la rama `main` en GitHub.

4. **Esperar la Revisión:**
   - Espera a que otro miembro del equipo revise tu pull request. Responde a cualquier comentario y realiza los ajustes necesarios.

5. **Fusionar el Pull Request:**
   - Una vez que el PR haya sido aprobado y todas las conversaciones hayan sido resueltas, puedes proceder a fusionar los cambios a `main`.

6. **Borrar la Rama:**
   - Después de fusionar, es recomendable borrar la rama que se utilizó para mantener el repositorio limpio.

## **Conclusión**
Estas reglas están diseñadas para facilitar un flujo de trabajo estructurado y mejorar la calidad del código en el proyecto. Se espera que todos los miembros del equipo sigan estas directrices para asegurar una colaboración eficaz y ordenada.

Si tienes preguntas o necesitas más información, no dudes en comunicárselo al equipo.
