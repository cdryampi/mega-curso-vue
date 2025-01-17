---
layout: resumen de git
title: Resumen del curso de git
---

# Que es GitHub

GitHub es una plataforma de desarrollo colaborativo para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc. Antes se llamaba Logical Awesome LLC. El código de los proyectos alojados en GitHub se almacena típicamente de forma pública, aunque utilizando una cuenta de pago, también se pueden hospedar repositorios privados.

## Que podemos hacer con una cuenta de GitHub

- Podemos ver el historial de cambios de un proyecto.

- Crear repositorios
- Clonar repositorios
- Crear ramas
- Crear Pull Request
- Crear Issues
- Crear proyectos
- Crear Wikis
- Crear Gists
- Crear Organizaciones
- Crear Teams

# Resumen del Libro: Aprendiendo Git

## Introducción

El libro **"Aprendiendo Git"** de Miguel Ángel Durán García es una guía completa para entender y dominar Git, el sistema de control de versiones más utilizado en el desarrollo de software. Su objetivo es proporcionar una base sólida para principiantes y ampliar los conocimientos de usuarios avanzados.

---

## Contenidos Principales

### Conceptos Básicos

- **Control de versiones:** Importancia de mantener un historial de cambios del código.
- **Git vs GitHub:** Diferencias entre el sistema de control de versiones y la plataforma en la nube.
- **Estados en Git:** Modificado, preparado y confirmado.

### Trabajando con Git Localmente

- Inicialización de repositorios.
- Comandos básicos: `git add`, `git commit`, `git status`, `git log`.
- Uso de `.gitignore` y restauración de versiones previas.

### Git Remoto y GitHub

- Clonar, enlazar y sincronizar repositorios locales con remotos.
- Uso de autenticación SSH para evitar el uso de contraseñas.
- Creación y manejo de Pull Requests.

---

## GitHub CLI y Automatización

### Introducción a GitHub CLI

GitHub CLI (`gh`) es una herramienta que permite interactuar con GitHub desde la línea de comandos. Esto facilita la automatización de tareas comunes, eliminando la necesidad de depender exclusivamente de la interfaz web.

### Instalación

1. Descargar la herramienta desde el [sitio oficial](https://cli.github.com/).
2. Instalar según tu sistema operativo:
   - **Linux:** `sudo apt install gh`
   - **macOS:** `brew install gh`
   - **Windows:** Usar el instalador oficial.

### Configuración Inicial

Ejecutar el comando:

```bash
gh auth login
```

Sigue las instrucciones para autenticarte mediante navegador o token.

### Comandos Básicos

1. **Clonar un repositorio:**
   ```bash
   gh repo clone <owner>/<repo>
   ```
2. **Crear un fork:**
   ```bash
   gh repo fork <repo-url>
   ```
3. **Crear una Pull Request:**
   ```bash
   gh pr create --title "Descripción" --body "Detalles del cambio"
   ```
4. **Revisar y fusionar Pull Requests:**
   ```bash
   gh pr list
   gh pr merge <pr-number>
   ```

### Automatización con GitHub Actions

GitHub Actions permite definir flujos de trabajo automatizados directamente en el repositorio mediante archivos YAML en `.github/workflows/`.

#### Ejemplo Básico de Workflow

```yaml
name: CI/CD Workflow

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout código
        uses: actions/checkout@v3

      - name: Configurar Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "16"

      - name: Instalar dependencias
        run: npm install

      - name: Ejecutar pruebas
        run: npm test
```

### Beneficios

- **Productividad:** Realiza tareas como crear repositorios, issues o PRs sin salir de la terminal.
- **Automatización:** Combina GitHub CLI con scripts y GitHub Actions para flujos de trabajo optimizados.
- **Escalabilidad:** Ideal para equipos y proyectos que buscan integración y despliegue continuos.

---

# Volver al [inicio](../index.html)
