import {useState} from 'react'

function Names() {
    const [names,setNames]=useState(["raj","sid","rohan","verma","roy"])
  return (
    <div>
        <h1>User Names</h1>
        <table>
            <thead>
                <th>Names</th>
            </thead>
            <tbody>
               {
                 names.map(function(element){
                    return (
                        <tr>
                            <td>
                                {element}
                            </td>
                        </tr>
                    )
                 })

               }
            </tbody>
        </table>
    </div>
  )
}

export default Names