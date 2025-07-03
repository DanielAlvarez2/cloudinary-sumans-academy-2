import { useState } from 'react'

function App() {
  const [img,setImg] = useState('')
  const formdata = new FormData()
  formdata.append('')
  const handleClick = ()=>{
    fetch('/single',{
      method:'POST',
      body:formdata
    })
    .then(res=>console.log(res.msg))
    .catch(err=>console.log(err))
  }
  return (
    <>
      <h1>Upload Image</h1>
      <input  onChange={(e)=>setImg(e.target.files[0])} 
              type='file' /><br/>
    </>
  )
}

export default App
