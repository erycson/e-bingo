Vue.component("number-component", {
  props: ["number", "rowIndex", "max"],
  template: `
    <template v-if="number > max || (rowIndex == 10 && number != max)">
      <div class="col p-2 m-1">
        <h1 class="m-0"></h1>
      </div>
    </template>

    <template v-else-if="number === 0">
      <div class="col p-2 m-1 bg-secondary text-center">
        <button type="button" class="btn text-white p-0 m-0">
          <h3 class="m-0">Novo</h3>
        </button>
      </div>
    </template>

    <template v-else="number !== null">
      <div class="col p-2 m-1 bg-secondary text-center">
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
    <div class="col p-3 container">
      <column-component v-for="(row, i) in Math.round(max / 10 + 2)" :row="row - 1" :rowIndex="i" :max="max"/>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    maxNumber: 90,
    interval: 1000,
    timeout: null,
    numbers: [],
    sequence: [],
  },
  methods: {
    start: function () {
      this.sequence = [];
      this.numbers = _.shuffle(_.range(1, this.maxNumber));
      this.callNextNumber();
    },
    callNextNumber: function () {
      this.timeout = setTimeout(() => {
        const number = this.getNextNumber();
        this.sequence.push(number);

        if (!this.isFinished()) this.callNextNumber();
      }, this.interval);
    },
    isFinished: function () {
      return !this.numbers.length;
    },
    getNextNumber: function () {
      const index = _.random(0, this.numbers.length);
      return this.numbers.splice(index, 1)[0];
    },
  },
});
