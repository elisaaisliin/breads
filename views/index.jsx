const React = require('react')
const Default = require('./layouts/Default')


function Index ({breads})  {
    {
        breads.map((bread, index)=> {
          return (
            <li key={index}>
              <a href={`/breads/${index}`}>
                {bread.name}
              </a>
            </li>
          )
        })
      }
}


module.exports = Index
