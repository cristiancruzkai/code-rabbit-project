/**
 * Dino Runner - Juego clásico del Dinosaurio
 * Implementado en Vanilla JavaScript con Canvas 2D
 */

(() => {
  'use strict';

  // --- BITMAPS DE SPRITES (Pixel Art) ---
  const DINO_STAND = [
    "            ########  ",
    "           ########## ",
    "           #### ####  ",
    "           ########## ",
    "           ########## ",
    "           ########   ",
    "           ######     ",
    "          #######     ",
    "#        ########     ",
    "###     ##########    ",
    "####### ##########    ",
    "##################    ",
    " ################     ",
    "  ##############      ",
    "   ############       ",
    "    ##########        ",
    "     ########         ",
    "      ######          ",
    "      ##  ##          ",
    "      ##  ##          ",
    "      ##  ##          ",
    "      ##  ##          ",
    "      ### ###         ",
    "                      "
  ];

  const DINO_RUN_1 = [
    "            ########  ",
    "           ########## ",
    "           #### ####  ",
    "           ########## ",
    "           ########## ",
    "           ########   ",
    "           ######     ",
    "          #######     ",
    "#        ########     ",
    "###     ##########    ",
    "####### ##########    ",
    "##################    ",
    " ################     ",
    "  ##############      ",
    "   ############       ",
    "    ##########        ",
    "     ########         ",
    "      ######          ",
    "      ##   ##         ",
    "      ##    #         ",
    "      ##              ",
    "      ##              ",
    "      ###             ",
    "                      "
  ];

  const DINO_RUN_2 = [
    "            ########  ",
    "           ########## ",
    "           #### ####  ",
    "           ########## ",
    "           ########## ",
    "           ########   ",
    "           ######     ",
    "          #######     ",
    "#        ########     ",
    "###     ##########    ",
    "####### ##########    ",
    "##################    ",
    " ################     ",
    "  ##############      ",
    "   ############       ",
    "    ##########        ",
    "     ########         ",
    "      ######          ",
    "       ##  ##         ",
    "      #    ##         ",
    "           ##         ",
    "           ##         ",
    "          ###         ",
    "                      "
  ];

  const DINO_DUCK_1 = [
    "                             ",
    "          ################## ",
    "         ####################",
    "         #### ###############",
    "         ####################",
    "         ########            ",
    "#       ##########           ",
    "###   ##############         ",
    "####################         ",
    " ##################          ",
    "   ##############            ",
    "     ##########              ",
    "      ##   ##                ",
    "      ##    #                ",
    "      ##                     ",
    "      ###                    "
  ];

  const DINO_DUCK_2 = [
    "                             ",
    "          ################## ",
    "         ####################",
    "         #### ###############",
    "         ####################",
    "         ########            ",
    "#       ##########           ",
    "###   ##############         ",
    "####################         ",
    " ##################          ",
    "   ##############            ",
    "     ##########              ",
    "       ##  ##                ",
    "      #    ##                ",
    "           ##                ",
    "          ###                "
  ];

  const DINO_DEAD = [
    "            ########  ",
    "           ########## ",
    "           # #  # #   ",
    "           #  ##  #   ",
    "           ########## ",
    "           ########   ",
    "           ######     ",
    "          #######     ",
    "#        ########     ",
    "###     ##########    ",
    "####### ##########    ",
    "##################    ",
    " ################     ",
    "  ##############      ",
    "   ############       ",
    "    ##########        ",
    "     ########         ",
    "      ######          ",
    "      ##  ##          ",
    "      ##  ##          ",
    "      ##  ##          ",
    "      ##  ##          ",
    "      ### ###         ",
    "                      "
  ];

  const CACTUS_SMALL = [
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "##  ####    ",
    "##  ####  ##",
    "##  ####  ##",
    "##  ####  ##",
    "######    ##",
    " ####     ##",
    "    ########",
    "    ######  ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    ",
    "    ####    "
  ];

  const CACTUS_DOUBLE = [
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####    ##  ####    ",
    "##  ####    ##  ####  ##",
    "##  ####  ####  ####  ##",
    "######    ##########  ##",
    " ####       ####      ##",
    "    ########    ########",
    "    ######      ######  ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    ",
    "    ####        ####    "
  ];

  const CACTUS_LARGE = [
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    " ##    #####        ",
    " ##    #####    ##  ",
    " ##    #####    ##  ",
    " ##    #####    ##  ",
    " #######   #######  ",
    "  #####     #####   ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        ",
    "       #####        "
  ];

  const BIRD_WING_UP = [
    "                 ##   ",
    "               ####   ",
    "              #####   ",
    "             ######   ",
    "            #######   ",
    "           ########   ",
    "         ##########   ",
    "       ############   ",
    "    ################  ",
    "   ################## ",
    "  ####################",
    "        #########     ",
    "         #######      ",
    "          #####       "
  ];

  const BIRD_WING_DOWN = [
    "          #####       ",
    "         #######      ",
    "        #########     ",
    "  ####################",
    "   ################## ",
    "    ################  ",
    "       ############   ",
    "         ##########   ",
    "           ########   ",
    "            #######   ",
    "             ######   ",
    "              #####   ",
    "               ####   ",
    "                 ##   "
  ];

  const CLOUD_SPRITE = [
    "        ########        ",
    "      ############      ",
    "    ################    ",
    "  ####################  ",
    "########################",
    "########################"
  ];

  // Helper para renderizar matrices pixeladas
  function drawSprite(ctx, matrix, x, y, scale, color) {
    ctx.fillStyle = color;
    const rows = matrix.length;
    for (let r = 0; r < rows; r++) {
      const row = matrix[r];
      const cols = row.length;
      for (let c = 0; c < cols; c++) {
        if (row[c] === '#') {
          ctx.fillRect(Math.floor(x + c * scale), Math.floor(y + r * scale), scale, scale);
        }
      }
    }
  }

  // --- EFECTOS DE SONIDO (Web Audio API) ---
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playJump() {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(140, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(460, this.ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.12);
      } catch (_) {}
    }

    playScoreMilestone() {
      if (!this.enabled || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880, now + 0.08); // A5
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } catch (_) {}
    }

    playHit() {
      if (!this.enabled || !this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.22);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.22);
      } catch (_) {}
    }
  }

  // --- MOTOR DEL JUEGO ---
  class DinoGame {
    constructor() {
      this.canvas = document.getElementById('gameCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.overlay = document.getElementById('game-overlay');
      this.soundBtn = document.getElementById('btn-sound');
      this.soundIcon = document.getElementById('sound-icon');
      this.themeBtn = document.getElementById('btn-theme');
      this.themeIcon = document.getElementById('theme-icon');
      this.restartBtn = document.getElementById('btn-restart');
      this.mobileJumpBtn = document.getElementById('btn-mobile-jump');
      this.mobileDuckBtn = document.getElementById('btn-mobile-duck');

      this.sounds = new SoundManager();

      // Dimensiones lógicas virtuales
      this.width = 800;
      this.height = 250;
      this.groundY = 210;
      this.pixelScale = 2;

      // Estado del juego
      this.STATE_IDLE = 'IDLE';
      this.STATE_PLAYING = 'PLAYING';
      this.STATE_GAMEOVER = 'GAMEOVER';
      this.state = this.STATE_IDLE;

      // Puntuación
      this.score = 0;
      this.highScore = this.loadHighScore();
      this.lastMilestone = 0;
      this.scoreFlashTimer = 0;

      // Velocidad
      this.initialSpeed = 380; // px/segundo
      this.maxSpeed = 820;
      this.speed = this.initialSpeed;

      // Dinosaurio
      this.dino = {
        x: 50,
        y: 0,
        vy: 0,
        normalWidth: 22 * this.pixelScale, // 44
        normalHeight: 24 * this.pixelScale, // 48
        duckWidth: 30 * this.pixelScale, // 60
        duckHeight: 16 * this.pixelScale, // 32
        width: 44,
        height: 48,
        isGrounded: true,
        isDucking: false,
        animTimer: 0,
        animFrame: 0,
        gravity: 1750,
        jumpVelocity: -620,
        fastDropGravity: 3800
      };

      // Obstáculos y entorno
      this.obstacles = [];
      this.clouds = [];
      this.groundDashes = [];
      this.minObstacleDistance = 320;
      this.distanceSinceLastObstacle = 0;

      // Entrada del usuario
      this.keys = {
        jump: false,
        duck: false
      };

      this.lastTime = 0;
      this.setupCanvasDPI();
      this.initGround();
      this.initClouds();
      this.bindEvents();
      this.resetDinoPosition();

      // Iniciar bucle principal
      requestAnimationFrame(this.gameLoop.bind(this));
    }

    setupCanvasDPI() {
      // Manejar pantallas Retina / HiDPI limpiamente manteniendo proporción
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      this.ctx.scale(dpr, dpr);
      this.ctx.imageSmoothingEnabled = false;
    }

    loadHighScore() {
      try {
        const val = localStorage.getItem('dino_runner_highscore');
        return val ? parseInt(val, 10) || 0 : 0;
      } catch (_) {
        return 0;
      }
    }

    saveHighScore(val) {
      try {
        localStorage.setItem('dino_runner_highscore', val.toString());
      } catch (_) {}
    }

    resetDinoPosition() {
      this.dino.width = this.dino.normalWidth;
      this.dino.height = this.dino.normalHeight;
      this.dino.y = this.groundY - this.dino.height;
      this.dino.vy = 0;
      this.dino.isGrounded = true;
      this.dino.isDucking = false;
    }

    initGround() {
      this.groundDashes = [];
      for (let x = 0; x < this.width + 100; x += 15) {
        if (Math.random() < 0.45) {
          const dashWidth = Math.floor(Math.random() * 8) + 2;
          this.groundDashes.push({
            x: x,
            y: this.groundY + Math.floor(Math.random() * 6),
            width: dashWidth
          });
        }
      }
    }

    initClouds() {
      this.clouds = [
        { x: 180, y: 40, speedMultiplier: 0.15 },
        { x: 420, y: 70, speedMultiplier: 0.12 },
        { x: 680, y: 30, speedMultiplier: 0.18 }
      ];
    }

    resetGame() {
      this.score = 0;
      this.lastMilestone = 0;
      this.scoreFlashTimer = 0;
      this.speed = this.initialSpeed;
      this.obstacles = [];
      this.distanceSinceLastObstacle = 200;
      this.resetDinoPosition();
      this.overlay.classList.add('hidden');
      this.state = this.STATE_PLAYING;
    }

    startGame() {
      this.sounds.init();
      if (this.state === this.STATE_IDLE || this.state === this.STATE_GAMEOVER) {
        this.resetGame();
      }
    }

    triggerJump() {
      this.sounds.init();
      if (this.state === this.STATE_IDLE || this.state === this.STATE_GAMEOVER) {
        this.resetGame();
        return;
      }
      if (this.state === this.STATE_PLAYING && this.dino.isGrounded) {
        this.dino.vy = this.dino.jumpVelocity;
        this.dino.isGrounded = false;
        this.sounds.playJump();
      }
    }

    setDucking(isDucking) {
      if (this.state !== this.STATE_PLAYING) return;
      this.dino.isDucking = isDucking;
    }

    bindEvents() {
      // Teclado
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
          e.preventDefault();
          this.triggerJump();
        } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
          e.preventDefault();
          this.setDucking(true);
        }
      });

      window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowDown' || e.code === 'KeyS') {
          e.preventDefault();
          this.setDucking(false);
        }
      });

      // Canvas click / touch
      this.canvas.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        this.triggerJump();
      });

      // Botón reiniciar
      this.restartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.resetGame();
      });

      // Botones móviles
      if (this.mobileJumpBtn) {
        this.mobileJumpBtn.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          this.triggerJump();
        });
      }

      if (this.mobileDuckBtn) {
        this.mobileDuckBtn.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          this.setDucking(true);
        });
        const stopDuck = (e) => {
          e.preventDefault();
          this.setDucking(false);
        };
        this.mobileDuckBtn.addEventListener('pointerup', stopDuck);
        this.mobileDuckBtn.addEventListener('pointercancel', stopDuck);
        this.mobileDuckBtn.addEventListener('pointerleave', stopDuck);
      }

      // Sonido
      this.soundBtn.addEventListener('click', () => {
        this.sounds.init();
        this.sounds.enabled = !this.sounds.enabled;
        this.soundIcon.textContent = this.sounds.enabled ? '🔊' : '🔇';
      });

      // Tema Oscuro / Claro
      this.themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        this.themeIcon.textContent = isDark ? '☀️' : '🌙';
      });

      // Redimensión de ventana (mantiene DPI nítido)
      window.addEventListener('resize', () => {
        this.setupCanvasDPI();
      });
    }

    spawnObstacle() {
      // Variantes de obstáculos
      // Cacto pequeño (0), Cacto doble (1), Cacto grande (2), Pájaro (3, solo si score >= 180)
      const canSpawnBird = this.score >= 180;
      const choices = canSpawnBird ? [0, 0, 1, 1, 2, 3, 3] : [0, 0, 1, 1, 2];
      const type = choices[Math.floor(Math.random() * choices.length)];

      let obstacle;
      if (type === 0) {
        // Cacto pequeño
        const w = 12 * this.pixelScale;
        const h = 24 * this.pixelScale;
        obstacle = {
          type: 'cactus_small',
          x: this.width + 20,
          y: this.groundY - h,
          width: w,
          height: h,
          matrix: CACTUS_SMALL
        };
      } else if (type === 1) {
        // Cacto doble
        const w = 24 * this.pixelScale;
        const h = 24 * this.pixelScale;
        obstacle = {
          type: 'cactus_double',
          x: this.width + 20,
          y: this.groundY - h,
          width: w,
          height: h,
          matrix: CACTUS_DOUBLE
        };
      } else if (type === 2) {
        // Cacto grande
        const w = 18 * this.pixelScale;
        const h = 30 * this.pixelScale;
        obstacle = {
          type: 'cactus_large',
          x: this.width + 20,
          y: this.groundY - h,
          width: w,
          height: h,
          matrix: CACTUS_LARGE
        };
      } else {
        // Pájaro volador (Pterodáctilo)
        const w = 22 * this.pixelScale;
        const h = 14 * this.pixelScale;
        // Alturas: 0 = salto obligado, 1 = se puede agachar o saltar, 2 = pasar caminando agachado
        const altitudes = [this.groundY - 32, this.groundY - 54, this.groundY - 76];
        const birdY = altitudes[Math.floor(Math.random() * altitudes.length)];
        obstacle = {
          type: 'bird',
          x: this.width + 20,
          y: birdY,
          width: w,
          height: h,
          animFrame: 0,
          animTimer: 0
        };
      }

      this.obstacles.push(obstacle);
      this.distanceSinceLastObstacle = 0;
      // La separación mínima se incrementa con la velocidad para asegurar que el salto siempre sea posible
      this.minObstacleDistance = Math.max(260, this.speed * 0.65 + Math.random() * 220);
    }

    update(dt) {
      if (this.state !== this.STATE_PLAYING) {
        // Animaciones pasivas en IDLE
        this.updateClouds(dt * 0.5);
        return;
      }

      // 1. Aumentar velocidad paulatinamente
      this.speed = Math.min(this.maxSpeed, this.speed + 4.5 * dt);

      // 2. Aumentar puntuación
      this.score += dt * 10;
      const roundedScore = Math.floor(this.score);

      // Milestone cada 100 puntos
      if (roundedScore > 0 && roundedScore % 100 === 0 && roundedScore !== this.lastMilestone) {
        this.lastMilestone = roundedScore;
        this.scoreFlashTimer = 1.2; // parpadea 1.2 segundos
        this.sounds.playScoreMilestone();
      }

      if (this.scoreFlashTimer > 0) {
        this.scoreFlashTimer -= dt;
      }

      if (roundedScore > this.highScore) {
        this.highScore = roundedScore;
        this.saveHighScore(this.highScore);
      }

      // 3. Física del Dino
      const isDucking = this.dino.isDucking;
      if (isDucking) {
        this.dino.width = this.dino.duckWidth;
        this.dino.height = this.dino.duckHeight;
      } else {
        this.dino.width = this.dino.normalWidth;
        this.dino.height = this.dino.normalHeight;
      }

      // Gravedad normal o caída rápida al agacharse en el aire
      const currentGravity = (isDucking && !this.dino.isGrounded)
        ? this.dino.fastDropGravity
        : this.dino.gravity;

      this.dino.vy += currentGravity * dt;
      this.dino.y += this.dino.vy * dt;

      // Contacto con el suelo
      const targetFloor = this.groundY - this.dino.height;
      if (this.dino.y >= targetFloor) {
        this.dino.y = targetFloor;
        this.dino.vy = 0;
        this.dino.isGrounded = true;
      } else {
        this.dino.isGrounded = false;
      }

      // Animación de correr
      this.dino.animTimer += dt;
      if (this.dino.animTimer >= 0.1) {
        this.dino.animTimer = 0;
        this.dino.animFrame = (this.dino.animFrame + 1) % 2;
      }

      // 4. Terreno
      const distanceMoved = this.speed * dt;
      for (let i = 0; i < this.groundDashes.length; i++) {
        this.groundDashes[i].x -= distanceMoved;
        if (this.groundDashes[i].x < -20) {
          this.groundDashes[i].x = this.width + Math.random() * 30;
          this.groundDashes[i].y = this.groundY + Math.floor(Math.random() * 6);
        }
      }

      // 5. Nubes
      this.updateClouds(dt);

      // 6. Generación de obstáculos
      this.distanceSinceLastObstacle += distanceMoved;
      if (this.distanceSinceLastObstacle > this.minObstacleDistance) {
        this.spawnObstacle();
      }

      // 7. Mover obstáculos y detectar colisiones
      for (let i = this.obstacles.length - 1; i >= 0; i--) {
        const obs = this.obstacles[i];
        obs.x -= distanceMoved;

        // Animación de alas del pájaro
        if (obs.type === 'bird') {
          obs.animTimer += dt;
          if (obs.animTimer >= 0.15) {
            obs.animTimer = 0;
            obs.animFrame = (obs.animFrame + 1) % 2;
          }
        }

        // Detección de colisiones con margen justo (inset)
        if (this.checkCollision(this.dino, obs)) {
          this.gameOver();
          return;
        }

        // Eliminar fuera de pantalla
        if (obs.x + obs.width < -30) {
          this.obstacles.splice(i, 1);
        }
      }
    }

    updateClouds(dt) {
      for (let i = 0; i < this.clouds.length; i++) {
        const cloud = this.clouds[i];
        cloud.x -= this.speed * cloud.speedMultiplier * dt;
        if (cloud.x < -60) {
          cloud.x = this.width + Math.random() * 60;
          cloud.y = 25 + Math.random() * 60;
        }
      }
    }

    checkCollision(dino, obs) {
      // Inset para bordes visuales justos y perdonar rozaduras insignificantes
      const dinoInsetX = 6;
      const dinoInsetY = 4;
      const obsInsetX = 4;
      const obsInsetY = 3;

      const dLeft = dino.x + dinoInsetX;
      const dRight = dino.x + dino.width - dinoInsetX;
      const dTop = dino.y + dinoInsetY;
      const dBottom = dino.y + dino.height;

      const oLeft = obs.x + obsInsetX;
      const oRight = obs.x + obs.width - obsInsetX;
      const oTop = obs.y + obsInsetY;
      const oBottom = obs.y + obs.height - obsInsetY;

      return (
        dLeft < oRight &&
        dRight > oLeft &&
        dTop < oBottom &&
        dBottom > oTop
      );
    }

    gameOver() {
      this.state = this.STATE_GAMEOVER;
      this.sounds.playHit();
      this.overlay.classList.remove('hidden');
    }

    // --- RENDERIZADO ---
    draw() {
      // Limpiar lienzo
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Obtener el color actual según el modo
      const style = getComputedStyle(document.body);
      const dinoColor = style.getPropertyValue('--dino-color').trim() || '#535353';
      const secondaryColor = style.getPropertyValue('--text-secondary').trim() || '#757575';

      // 1. Dibujar nubes
      for (const cloud of this.clouds) {
        drawSprite(this.ctx, CLOUD_SPRITE, cloud.x, cloud.y, 2, secondaryColor + '66');
      }

      // 2. Dibujar línea de suelo
      this.ctx.strokeStyle = dinoColor;
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(0, this.groundY);
      this.ctx.lineTo(this.width, this.groundY);
      this.ctx.stroke();

      // Detalles del suelo
      this.ctx.fillStyle = dinoColor;
      for (const dash of this.groundDashes) {
        this.ctx.fillRect(Math.floor(dash.x), Math.floor(dash.y), dash.width, 2);
      }

      // 3. Dibujar obstáculos
      for (const obs of this.obstacles) {
        if (obs.type === 'bird') {
          const birdMatrix = obs.animFrame === 0 ? BIRD_WING_UP : BIRD_WING_DOWN;
          drawSprite(this.ctx, birdMatrix, obs.x, obs.y, this.pixelScale, dinoColor);
        } else {
          drawSprite(this.ctx, obs.matrix, obs.x, obs.y, this.pixelScale, dinoColor);
        }
      }

      // 4. Dibujar Dino
      let dinoSprite;
      if (this.state === this.STATE_GAMEOVER) {
        dinoSprite = DINO_DEAD;
      } else if (!this.dino.isGrounded) {
        dinoSprite = DINO_STAND;
      } else if (this.dino.isDucking) {
        dinoSprite = this.dino.animFrame === 0 ? DINO_DUCK_1 : DINO_DUCK_2;
      } else {
        dinoSprite = this.dino.animFrame === 0 ? DINO_RUN_1 : DINO_RUN_2;
      }

      drawSprite(this.ctx, dinoSprite, this.dino.x, this.dino.y, this.pixelScale, dinoColor);

      // 5. Dibujar Marcador de Puntuación
      this.drawScore(dinoColor, secondaryColor);

      // 6. Mensaje de bienvenida si está IDLE
      if (this.state === this.STATE_IDLE) {
        this.ctx.fillStyle = dinoColor;
        this.ctx.font = 'bold 15px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('PRESIONA ESPACIO O TOCA PARA EMPEZAR', this.width / 2, this.groundY - 70);
      }
    }

    drawScore(primaryColor, secondaryColor) {
      this.ctx.font = '700 16px "Courier New", Courier, monospace';
      this.ctx.textAlign = 'right';

      const currentScoreNum = Math.floor(this.score);
      const scoreStr = currentScoreNum.toString().padStart(5, '0');
      const hiScoreStr = this.highScore.toString().padStart(5, '0');

      // Parpadeo visual al cumplir centenares
      const isFlashing = this.scoreFlashTimer > 0 && Math.floor(this.scoreFlashTimer * 8) % 2 === 0;

      // High Score
      if (this.highScore > 0) {
        this.ctx.fillStyle = secondaryColor;
        this.ctx.fillText(`HI ${hiScoreStr}  `, this.width - 95, 32);
      }

      // Score actual
      if (!isFlashing) {
        this.ctx.fillStyle = primaryColor;
        this.ctx.fillText(scoreStr, this.width - 25, 32);
      }
    }

    // --- LOOP PRINCIPAL ---
    gameLoop(timestamp) {
      if (!this.lastTime) this.lastTime = timestamp;
      let dt = (timestamp - this.lastTime) / 1000;
      this.lastTime = timestamp;

      // Límite de seguridad para dt (evita saltos cuánticos si la pestaña estuvo oculta)
      if (dt > 0.1) dt = 0.1;

      this.update(dt);
      this.draw();

      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  // Inicializar al cargar el DOM
  window.addEventListener('DOMContentLoaded', () => {
    new DinoGame();
  });
})();
