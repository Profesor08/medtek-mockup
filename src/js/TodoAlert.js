export default (function () {
  let LOW = 2;
  let MEDIUM = 1;
  let HIGH = 0;
  let COMMON = 4;
  let READY = 5;
  let count = 0;

  function getGradeColors(grade) {
    switch (grade) {
      case LOW: return {
        c1: "#004085",
        c2: "#8FB8FC",
        c3: "#004085"
      };
      case MEDIUM: return {
        c1: "#E43C03",
        c2: "#F97C00",
        c3: "#FCD387"
      };
      case HIGH: return {
        c1: "#800000",
        c2: "#FF0000",
        c3: "#FFCCCC"
      };
      case COMMON: return {
        c1: "#5C5C5C",
        c2: "#C0C0C0",
        c3: "#000000"
      };
      case READY: return {
        c1: "#1b5e20",
        c2: "#2e7d32",
        c3: "#fefefe"
      };
      default: return {
        c1: "#800000",
        c2: "#FF0000",
        c3: "#fefefe"
      };
    }
  }

  function alert(string, grade, skip = false) {

    if (skip === false) {
      count++;
    }

    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
    {
      let args = [];
      let color = getGradeColors(grade);

      if (skip === true) {
        args.push(`%c %c %c ${string} `);
      }
      else {
        args.push(`%c ${count}%c %c ${string} `);
      }

      args.push(`background: ${color.c1}; line-height: 26px;`);
      args.push(`background: ${color.c1}; line-height: 26px;`);
      args.push(`background: ${color.c2}; line-height: 26px; color: ${color.c3};`);

      window.console.log.apply(console, args);
    }
    else if (window.console)
    {
      window.console.log(string);
    }
  }

  return {
    alert: alert,
    LOW: LOW,
    MEDIUM: MEDIUM,
    HIGH: HIGH,
    COMMON: COMMON,
    READY: READY,
  }
})();