// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express')
const app = express()

const PORT = process.env.PORT || 4001

// Use static server
app.use(express.static('public')) 

app.listen(PORT, () => {
  console.log(`Hi I'm the server and I listen the port ${PORT}.`)
})





