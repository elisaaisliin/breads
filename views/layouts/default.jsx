const React = require('react')

function Default(html) {
    console.log('------')
    console.log(html)
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered!</h1>
      <div className="container">
        {html.children}
      </div>
    </body>
    </html>
  )
}

module.exports = Default





function whatever(num1) {
    return num1*5;
}
var tacos = 5;
whatever(tacos)