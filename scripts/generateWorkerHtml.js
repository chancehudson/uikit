const fs = require('fs').promises
const path = require('path')

;(async () => {
  const styleData = await fs.readFile(path.join(__dirname, '../build/styles.css'))
  const html =
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UIKit Demo</title>
    <script defer src="/main.js"></script>
    <style>
      ${styleData}
    </style>
  <body>
    <div id="root"></div>
  </body>
</html>
`
  await fs.writeFile(path.join(__dirname, '../server/html.js'), `export default \`${html}\``)
})()
