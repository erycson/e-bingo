function startBingo() {
  app.stop();
  app.clear();
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
      <div class="col px-0 m-1 bg-white text-center text-danger" v-for="number in numbers" :key="number">
        <h1 class="m-0 style="height: 3.2rem">{{ number }}</h1>
      </div>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    status: 'stopped',
    maxNumber: 90,
    interval: 1,
    timeout: null,
    numbers: [],
    sequence: ['-', '', '', '', '', '', '', ''],
    btnStartText: 'Chamada automática'
  },
  methods: {
    btnStartClick: function () {
      if (this.status == 'paused') {
        this.resume();
      } else if (this.status == 'running') {
        this.pause();
      } else {
        this.start();
      }
    },
    start: function () {
      this.clear();
      this.numbers = _.shuffle(_.range(1, this.maxNumber + 1));
      this.sequence = [];
      this.resume();
    },
    resume: function () {
      this.status = 'running';
      this.btnStartText = 'Pausa';
      this.getNextNumberWithInterval();
    },
    pause: function () {
      this.status = 'paused';
      this.btnStartText = 'Continuar chamada automática';
      clearTimeout(this.timeout);
    },
    stop: function () {
      this.running = 'stopped';
      this.btnStartText = 'Chamada automática';
      clearTimeout(this.timeout);
    },
    clear: function() {
      $('#current-number').text('--');
      $(".number.bg-success")
        .removeClass("bg-success")
        .addClass("bg-secondary");
    },
    getNextNumberWithInterval: function() {
      this.timeout = setTimeout(() => {
        this.getNextNumber();
        this.getNextNumberWithInterval();
      }, this.interval * 1000);
    },
    getNextNumber: function () {
      if (this.isFinished()) {
        this.stop();
        return;
      }

      const number = this.nextNumber();
      this.onNextNumber(number);
    },
    onNextNumber(number) {
      $('#current-number').text(number);
      $(`#number-${number}`).removeClass("bg-secondary").addClass("bg-success");

      if (this.sequence.length == 9) {
        const sequence = this.sequence;
        sequence.shift();
        sequence.push(number);
        this.sequence = sequence; 
      } else {
        this.sequence.push(number);
      }

      console.log(this.sequence);
    },
    isFinished: function () {
      return !this.numbers.length;
    },
    nextNumber: function () {
      const index = _.random(0, this.numbers.length);
      return this.numbers.splice(index, 1)[0];
    },
  },
});
