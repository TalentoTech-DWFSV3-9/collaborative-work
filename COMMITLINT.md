**Commitlint**, una herramienta que ayuda a asegurar que los mensajes de confirmación (commits) en tu proyecto sigan un formato consistente. Esto es especialmente útil en equipos de desarrollo donde los mensajes de commit deben ser claros y seguir un estilo común.

A continuación, te explico los casos de uso para cada tipo de commit:

### Tipos de Commits

1. **build**:

   - **Uso**: Cambios que afectan el sistema de construcción o dependencias externas (ej. herramientas de compilación, bibliotecas).
   - **Ejemplo**: `build: update dependency webpack to version 5.0.0`

2. **chore**:

   - **Uso**: Cambios que no entran en ninguna de las otras categorías; generalmente, se refiere a tareas de mantenimiento y gestión del proyecto que no afectan la funcionalidad.
   - **Ejemplo**: `chore: update npm packages`

3. **ci**:

   - **Uso**: Cambios relacionados con los archivos de configuración y scripts de integración continua.
   - **Ejemplo**: `ci: add CI configuration for GitHub Actions`

4. **docs**:

   - **Uso**: Cambios en la documentación del proyecto, como archivos README o comentarios en el código.
   - **Ejemplo**: `docs: update API documentation`

5. **feat**:

   - **Uso**: Introducción de nuevas funcionalidades o características al proyecto.
   - **Ejemplo**: `feat: add user authentication`

6. **fix**:

   - **Uso**: Corrección de errores que afectan el funcionamiento del proyecto.
   - **Ejemplo**: `fix: resolve issue with user login not working`

7. **perf**:

   - **Uso**: Cambios que mejoran el rendimiento del proyecto, como optimizaciones de código.
   - **Ejemplo**: `perf: improve loading time of the homepage`

8. **refactor**:

   - **Uso**: Cambios en el código que no añaden funcionalidades ni corrigen errores, pero que mejoran la estructura o legibilidad del código.
   - **Ejemplo**: `refactor: simplify the user service code`

9. **revert**:

   - **Uso**: Reversión de un commit anterior. Esto es útil si un cambio ha introducido un error y necesitas volver a un estado anterior.
   - **Ejemplo**: `revert: revert "feat: add user authentication"`

10. **style**:

- **Uso**: Cambios que no afectan la lógica del código pero que mejoran su estilo o formato (ej. espaciado, comillas, etc.).
- **Ejemplo**: `style: fix indentation in the main component`

11. **test**:

- **Uso**: Cambios que añaden o modifican pruebas existentes en el proyecto.
- **Ejemplo**: `test: add tests for the user service`
