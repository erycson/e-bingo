function genPainelMatrix(maxNumber) {
  return _.range(0, 10).map((col) => {
    return _.range(0, 10)
      .map((row) => col * 10 + row)
      .map((i) => (i > maxNumber ? null : i));
  });
}

Vue.component("number-component", {
  props: ["number", "rowIndex", "max"],
  template: `
    <div class="col p-2 m-1 bg-secondary">
      <template v-if="number === null || (rowIndex == 10 && number != max)">

      </template>
      <template v-else-if="number === 0">
        Novo
      </template>
      <template v-else="number !== null">
        {{ number }}
      </template>
    </div>
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
      <column-component v-for="(row, i) in max / 10 + 2" :row="row - 1" :rowIndex="i" :max="max"/>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    maxNumber: 90,
    painelNumbers: genPainelMatrix(90),
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
