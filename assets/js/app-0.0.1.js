
const app = new Vue({
  el: "#app",
  data: {
    maxNumber: 90,
    interval: 1000,
    timeout: null,
    numbers: [],
    sequence: []
  },
  methods: {
    start: function() {
      this.sequence = [];
      this.numbers = _.shuffle(
        _.range(1, this.maxNumber)
      );
      this.callNextNumber();
    },
    callNextNumber: function() {
      this.timeout = setTimeout(() => {
        const number = this.getNextNumber();
        this.sequence.push(number);
        
        if (!this.isFinished())
          this.callNextNumber();
      }, this.interval);
    },
    isFinished: function () {
      return !this.numbers.length;
    },
    getNextNumber: function() {
      const index = _.random(0, this.numbers.length);
      return this.numbers.splice(index, 1)[0];
    }
  }
});
