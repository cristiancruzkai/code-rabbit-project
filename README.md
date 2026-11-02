# Dino Runner 🦖

Juego inspirado en el clásico corredor del dinosaurio T-Rex de Google Chrome, desarrollado con HTML5 Canvas y Vanilla JavaScript, sin librerías externas ni dependencias.

![Dino Runner Preview](https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f996.png)

## 🎮 Características

- **Gráficos Pixel Art puros**: Renderizados proceduralmente en Canvas 2D sin depender de imágenes externas.
- **Física fluida**: Basada en `deltaTime` (independiente de la tasa de refresco a 60Hz, 120Hz ProMotion o 144Hz).
- **Variedad de obstáculos**:
  - Cactos pequeños, dobles y gigantes.
  - Pájaros voladores (Pterodáctilos) que aparecen a diferentes alturas según el avance del jugador.
- **Efectos de sonido 8-bit retro**: Generados en tiempo real mediante la **Web Audio API** (salto, colisión y sonido de récord cada 100 puntos).
- **Puntuación y High Score**: Guardado automático del récord en `localStorage`.
- **Modo Claro / Modo Oscuro**: Alternable en cualquier momento.
- **Diseño Responsivo**: Se adapta a pantallas móviles y de escritorio, con soporte táctil y controles dedicados en pantalla para dispositivos móviles.

---

## 🕹️ Controles

| Acción | Teclado | Ratón / Pantalla Táctil |
| :--- | :--- | :--- |
| **Iniciar / Saltar** | <kbd>Espacio</kbd>, <kbd>↑</kbd>, <kbd>W</kbd> | Click / Tap en el juego o botón **Saltar** |
| **Agacharse / Caída rápida** | <kbd>↓</kbd>, <kbd>S</kbd> | Botón **Agacharse** |
| **Reiniciar** | <kbd>Espacio</kbd> o <kbd>Enter</kbd> | Botón **Reintentar** o tap en pantalla |
| **Silenciar sonido** | — | Botón 🔊 en la esquina superior |
| **Alternar tema** | — | Botón 🌙 / ☀️ |

---

## 🚀 Cómo jugar

Solo necesitas abrir el archivo `index.html` en cualquier navegador moderno:

```bash
# En macOS:
open index.html

# O sirviendo localmente si lo prefieres:
npx serve .
# o con Python:
python3 -m http.server 8000
```
