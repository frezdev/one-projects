function uno (callback) {
  console.log("uno")
  setTimeout(callback, 2000)
}

function dos () {
  console.log("dos")
}

setTimeout(() => {
  uno(dos)
}, 2000,);