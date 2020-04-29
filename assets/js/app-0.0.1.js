function startBingo() {
  app.stop();
  app.clear();
  Vue.set(app, "maxNumber", app.nextMaxNumber);
}

Vue.component("number-component", {
  props: ["number", "rowIndex", "max"],
  template: `
    <template v-if="number > max || (rowIndex == 10 && number != max)">
      <div class="col p-1 m-1">
        <h1 class="m-0"></h1>
      </div>
    </template>

    <template v-else-if="number === 0">
      <div class="col p-1 m-1 bg-secondary text-center">
        <button type="button" class="btn text-white p-0 m-0" v-on:click="startBingo">
          <h3 class="m-0">Novo</h3>
        </button>
      </div>
    </template>

    <template v-else="number !== null">
      <div :id="'number-' + number" class="col p-1 m-1 bg-secondary text-center number">
        <h1 class="m-0">{{ number }}</h1>
      </div>
    </template>
  `,
});

Vue.component("column-component", {
  props: ["row", "rowIndex", "max"],
  template: `
    <div class="row">
      <number-component v-for="col in 9" :number="row + ((col - 1) * 10)" :rowIndex="rowIndex" :max="max"/>
    </div>
  `,
});

Vue.component("painel-component", {
  props: ["max"],
  template: `
    <div class="col px-3 container">
      <column-component v-for="(row, i) in Math.round(max / 10 + 2)" :row="row - 1" :rowIndex="i" :max="max"/>
    </div>
  `,
});

Vue.component("latest-component", {
  props: ["numbers"],
  template: `
    <div class="row">
      <div class="col px-0 m-1 bg-white text-center text-danger" v-for="number in numbers" :key="'last-' + number">
        <h1 class="m-0" style="height: 3.2rem">{{ number }}</h1>
      </div>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    status: "stopped",
    maxNumber: 90,
    nextMaxNumber: 90,
    interval: 1,
    timeout: null,
    numbers: null,
    numbersIndex: null,
    sequence: ["", "", "", "", "", "", "", "", ""],
    btnText: "Chamada automática",
  },
  methods: {
    /* -------------------------------------------------------------------------- */
    /*                                  Eventos                                   */
    /* -------------------------------------------------------------------------- */

    btnChangeMax() {
      this.nextMaxNumber = this.nextMaxNumber == 90 ? 75 : 90;
    },
    btnStartAutomatic() {
      if (this.status == "paused") {
        this.resume();
      } else if (this.status == "running" && !this.timeout) {
        this.resume();
      } else if (this.status == "running") {
        this.pause();
      } else if (this.status == "stopped") {
        this.start();
      }
    },
    btnStartManual() {
      if (!this.isStarted()) {
        this.init();
      }
      if (this.timeout !== null) {
        this.pause();
      }

      this.getNextNumber();
    },

    /* -------------------------------------------------------------------------- */
    /*                              Métodos de Estado                             */
    /* -------------------------------------------------------------------------- */

    init() {
      this.clear();
      this.numbers = _.shuffle(_.range(1, this.maxNumber + 1));
      this.numbersIndex = 0;
      this.status = "running";
    },
    start() {
      this.init();
      this.btnText = "Pausa";
      this.getNextNumberWithInterval();
    },
    resume() {
      this.status = "running";
      this.btnText = "Pausa";
      this.getNextNumberWithInterval();
    },
    pause() {
      this.status = "paused";
      this.btnText = "Continuar chamada automática";
      clearTimeout(this.timeout);
      this.timeout = null;
    },
    stop() {
      this.btnText = "Chamada automática";
      this.status = "stopped";
      this.numbers = null;
      this.numbersIndex = null;
      clearTimeout(this.timeout);
      this.timeout = null;
    },
    clear() {
      this.sequence = ["", "", "", "", "", "", "", "", ""];
      $("#current-number").text("");
      $(".number.bg-success")
        .removeClass("bg-success")
        .addClass("bg-secondary");
    },
    finish() {
      this.btnText = "Terminou";
      this.status = "finished";
      clearTimeout(this.timeout);
      this.timeout = null;
    },

    /* -------------------------------------------------------------------------- */
    /*                                   Métodos                                  */
    /* -------------------------------------------------------------------------- */

    getNextNumberWithInterval() {
      if (this.status !== "running") {
        return;
      }

      this.timeout = setTimeout(async () => {
        await this.getNextNumber();
        this.getNextNumberWithInterval();
      }, this.interval * 1000);
    },
    async getNextNumber() {
      if (this.isFinished()) {
        return;
      }

      const number = this.nextNumber();
      await this.handleNextNumber(number);

      if (!this.hasNumber()) {
        this.finish();
        return;
      }
    },
    async handleNextNumber(number) {
      $("#current-number").text(number);
      $(`#number-${number}`).removeClass("bg-secondary").addClass("bg-success");

      const sequence = this.sequence;
      sequence.shift();
      sequence.push(number);
      this.sequence = sequence;

      return new Promise((resolve) => {
        const audio = new Audio(`assets/audio/${number}.wav`);
        audio.onended = resolve;
        audio.play();
      });
    },
    isFinished() {
      return this.status === "finished";
    },
    isStarted() {
      return this.status !== "stopped";
    },
    hasNumber() {
      return this.numbersIndex < this.numbers.length;
    },
    nextNumber() {
      return this.numbers[this.numbersIndex++];
    },
  },
});
