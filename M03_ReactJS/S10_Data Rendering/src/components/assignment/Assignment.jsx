import {useState} from 'react'

function Assignment() {

    const [url,setUrl] = useState("https://ik.imagekit.io/laxaar/1686313855890ReactJS_2400x1200.png")

    function changeToNextJS(){
         setUrl("https://miro.medium.com/v2/resize:fit:1176/1*mdLT2ZK_3OlDwK2R-Q2UlQ.jpeg")
    }

    function changeToReactJS(){
      setUrl("https://ik.imagekit.io/laxaar/1686313855890ReactJS_2400x1200.png")
    }
  return (
    <div className='assignment'>
        <img src={url} width={500} height={300} alt="" /><br/><br/>
        <input type="radio"/>
        <label htmlFor="">React JS</label>

        <input type="radio"/>
        <label htmlFor="">NextJS</label>
        {/* <button onClick={changeToReactJS}>React JS</button>
        <button onClick={changeToNextJS}>Next JS</button> */}
    </div>
  )
}

export default Assignment