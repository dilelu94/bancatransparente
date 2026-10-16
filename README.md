# Banca Transparente

> Observatorio ciudadano y de acceso abierto para el seguimiento de la asistencia parlamentaria, quórum y actividad legislativa en la Cámara de Diputados de la Nación Argentina.

---

## 🏛️ Acerca del Proyecto

**Banca Transparente** nace como una herramienta pública e independiente orientada a visibilizar la presencia y el accionar de los representantes legislativos en momentos clave de la vida democrática y laboral del país.

El foco del proyecto está puesto en los trabajadores y la ciudadanía, garantizando que el acceso a la información sobre quiénes habilitan o bloquean debates trascendentales sea transparente, ágil y verificable.

### Características Principales
* **Historial de Sesiones:** Seguimiento detallado por fecha de sesiones especiales, ordinarias y extraordinarias.
* **Métricas de Recinto:** Control visual inmediato del quórum reglamentario (129 diputados), presentes y bancas faltantes.
* **Filtros Avanzados:** Búsqueda en tiempo real por nombre de legislador, bloque partidario y provincia.
* **Ficha Individual:** Acceso al distrito electoral e institucional representado en el Congreso y enlace directo a búsquedas públicas de actividad legislativa.
* **Enfoque de Privacidad y Función Pública:** La plataforma cumple con estándares de protección de datos personales frente al *doxxing*, geolocalizando sedes distritales e institucionales públicas.

---

## 🚀 Puesta en Marcha Local

### Requisitos Previos
* [Node.js](https://nodejs.org/) v20 o superior
* [npm](https://www.npmjs.com/) v9 o superior

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/dilelu94/bancatransparente.git
   cd bancatransparente
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Ejecutar pruebas unitarias:
   ```bash
   npm test
   ```

5. Compilar para producción:
   ```bash
   npm run build
   ```

---

## 🛠️ Stack Tecnológico

* **Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Bundler & Dev Server:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Iconografía:** [Lucide React](https://lucide.dev/)
* **Testing:** [Vitest](https://vitest.dev/)
* **CI/CD:** [GitHub Actions](https://github.com/features/actions)

---

## 📦 Estructura del Código

```text
bancatransparente/
├── .github/
│   └── workflows/
│       └── deploy.yml       # Pipeline CI/CD: tests, build y deploy
├── src/
│   ├── components/
│   │   ├── DeputyCard.tsx   # Tarjeta interactiva de diputado
│   │   ├── DeputyModal.tsx  # Ficha detallada con mapa y búsqueda
│   │   ├── Filters.tsx      # Búsqueda y selectores de partido/provincia
│   │   ├── Footer.tsx       # Pie de página y enlaces institucionales
│   │   └── Header.tsx       # Cabecera, selector de fecha y métricas
│   ├── data/
│   │   ├── sessions.ts      # Registro de sesiones y legisladores
│   │   └── sessions.test.ts # Pruebas unitarias de integridad de datos
│   ├── types/
│   │   └── index.ts         # Tipos e interfaces de TypeScript
│   ├── App.tsx              # Componente principal
│   ├── index.css            # Estilos globales y utilidades
│   └── main.tsx             # Punto de entrada de React
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🤝 Cómo Contribuir

Las contribuciones son bienvenidas:
1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-sesion`).
3. Asegúrate de que las pruebas pasen (`npm test` y `npm run build`).
4. Realiza tu commit (`git commit -m 'feat: incorporar sesión del 22/10'`).
5. Haz push a la rama (`git push origin feature/nueva-sesion`).
6. Abre un Pull Request describiendo los cambios.

---

## ⚖️ Licencia y Datos

Los datos procesados en esta plataforma provienen de registros taquigráficos, transmisiones oficiales y documentos públicos de la **Honorable Cámara de Diputados de la Nación Argentina**. Este proyecto es de código abierto bajo licencia [MIT](LICENSE).
