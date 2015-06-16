module.exports = Global =
  env: "dev"
  
  log:
    debug: () ->
      if Global.env isnt "dev"
        return
      this.commonLog("debug", arguments)
      
    info: () ->
      this.commonLog("info", arguments)
      
    commonLog: (logType, origin) ->
      msg = "[%s] Portfolio - #{logType}: #{origin[0]}"
      origin[0] = Global.formatDate(new Date(), "YYYYMMDD-hh:mm:ss").toString()
      for one in origin
        msg = msg.toString().replace("%s", one)
      console.log msg
      
  formatDate: (date, format) ->
    if not format?
      format = "YYYY-MM-DD hh:mm:ss.SSS"
    format = format.replace(/YYYY/g, date.getFullYear())
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2))
    format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2))
    format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2))
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2))
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2))
    if format.match(/S/g)
      milliSeconds = ("00" + date.getMilliseconds()).slice(-3)
      length = format.match(/S/g).length - 1
      for i in [0..length]
        format = format.replace(/S/, milliSeconds.substring(i, i + 1))
    return format;
