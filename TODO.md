# Plan completo: Aplicación para practicar escritura de código

Descripción general
Una aplicación progresiva para practicar y medir la escritura de código. Se organiza en cuatro fases que van desde una interfaz mínima hasta persistencia, estadísticas y mejoras.

## Fase 1 — Interfaz básica de escritura (mínimo viable)
Objetivo: permitir al usuario escribir código y medir rendimiento.
- Componente editor/input para introducir código.
- Vista comparativa: código objetivo (a escribir) vs código escrito.
- Detección de errores en tiempo real y resaltado de diferencias.
- Timer básico para medir duración de la sesión.
- Cálculo de WPM (palabras por minuto) y precisión al final de la sesión.

## Fase 2 — Contenido y selección de lenguaje
Objetivo: ofrecer contenido diverso y seleccionable.
- Conjunto inicial de snippets de código hardcoded.
- Selector de lenguaje (JavaScript, Python, TypeScript).
- Sistema de snippets aleatorios o por dificultad para sesiones variadas.

## Fase 3 — Persistencia
Objetivo: guardar progreso y resultados.
- Soporte localStorage para usuarios sin login (persistencia local de sesiones).
- Esquema de base de datos en Turso para almacenamiento centralizado.
- Guardado de resultados y metadatos en la BD para usuarios autenticados.

## Fase 4 — Estadísticas y mejoras
Objetivo: visualizar progreso y mejorar la experiencia.
- Dashboard de progreso con métricas por usuario.
- Gráficos de velocidad y precisión a lo largo del tiempo.
- Historial de sesiones con posibilidad de revisar y repetir ejercicios.

Notas de implementación rápidas
- Priorizar una interfaz simple y responsive antes de ampliar features.
- Diseñar el esquema de DB pensando en consultas eficientes para estadísticas.
- Empezar con snippets curados y añadir generadores/creadores luego.

Cronograma sugerido
1. Prototipo UI + medición básica (Fase 1) — 1–2 semanas.  
2. Añadir contenido y selector de lenguaje (Fase 2) — 1 semana.  
3. Integrar persistencia local y diseño de BD (Fase 3) — 1–2 semanas.  
4. Dashboard y gráficos (Fase 4) — 1–2 semanas.
