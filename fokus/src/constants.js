export const templates = {
  focus: `Optimiza tu productividad,<br>
          <strong class="app__title-strong">sumérgete en lo que importa.</strong>`,
  shortBreak: `¿Qué tal tomar un respiro?<br>
              <strong class="app__title-strong">¡Haz una pausa corta!</strong>`,
  longBreak: `Hora de volver a la superficie<br>
              <strong class="app__title-strong">Haz una pausa larga</strong>`
}

export const contexts = {
  focus: 'enfoque',
  shortBreak: 'descanso-corto',
  longBreak: 'descanso-largo'
}

export class LocalStorage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  static set (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}