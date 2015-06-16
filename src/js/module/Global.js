var Global;

module.exports = Global = {
  env: "dev",
  log: {
    debug: function() {
      if (Global.env !== "dev") {
        return;
      }
      return this.commonLog("debug", arguments);
    },
    info: function() {
      return this.commonLog("info", arguments);
    },
    commonLog: function(logType, origin) {
      var j, len, msg, one;
      msg = "[%s] Portfolio - " + logType + ": " + origin[0];
      origin[0] = Global.formatDate(new Date(), "YYYYMMDD-hh:mm:ss").toString();
      for (j = 0, len = origin.length; j < len; j++) {
        one = origin[j];
        msg = msg.toString().replace("%s", one);
      }
      return console.log(msg);
    }
  },
  formatDate: function(date, format) {
    var i, j, length, milliSeconds, ref;
    if (format == null) {
      format = "YYYY-MM-DD hh:mm:ss.SSS";
    }
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
    if (format.match(/S/g)) {
      milliSeconds = ("00" + date.getMilliseconds()).slice(-3);
      length = format.match(/S/g).length - 1;
      for (i = j = 0, ref = length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        format = format.replace(/S/, milliSeconds.substring(i, i + 1));
      }
    }
    return format;
  }
};
