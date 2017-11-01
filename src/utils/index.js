
const utils = {
  timestampToString: function (timestamp) {
    const date = new Date(timestamp)
    if (!date.getTime()) {
      return ''
    }
    return `${date.getFullYear()}/${
      utils.padStr(1 + date.getMonth())}/${
      utils.padStr(date.getDate())} ${
      utils.padStr(date.getHours())}:${
      utils.padStr(date.getMinutes())}:${
      utils.padStr(date.getSeconds())}`
  }
}

export default utils
