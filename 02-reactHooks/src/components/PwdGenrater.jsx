import { useCallback, useState ,useEffect ,useref } from 'react'

const PwdGenrater = () => {
  const [pwd , setPwd]=useState("")
  const [length , setLength]=useState(0)
  const [IsNumAllowed , setNum]=useState(false)
  const [IsCharAllowed , setChar]=useState(false)

  const GeneratePwd = useCallback(() => {
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(IsCharAllowed) str +="!@#$%^&*-_+=[]{}~`"
    if(IsNumAllowed) str +="123456789"
    
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random()*str.length)
      pass += str.charAt(index)
    }
    
    setPwd(pass)
    
  },[length,IsCharAllowed,IsNumAllowed,setPwd])


  const pwdRef = useref(null)
  const copyToclipboard = useCallback( () => {
    pwdRef.current?.select()
    pwdRef.current?.setSellectionRange
    window.navigator.clipboard.writeText(pwd)
  } ,[pwd,pwdRef])



useEffect(() =>{
  GeneratePwd()
},[length,IsCharAllowed,IsNumAllowed,setPwd,GeneratePwd])
  


  return (
    <>
      <div className='w-fit max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' >
        <h3 className='bg-gray-800 text-center my-3 text-xl text-red-600 font-bold w-fit'>Password generator</h3>
        <div  className='flex-row mb-3  shrink-0 w-fit'>
          <input 
          type="text" 
          placeholder='password'
          value={pwd} 
          className=" py-1 px-3"
          ref={pwdRef}
          />
          <button  
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyToclipboard}
          >copy</button>

        </div>

        <div className='p-2 flex-col w-fit  '>
          <div>
            <input 
            type="range"
            min={8}
            max={18}
            value={length}
            onChange={(e) => setLength(e.currentTarget.value)}
            readOnly
            />
            <label>length : {length}</label>

          </div>
          <div>
            <input 
            type="checkbox"
            defaultChecked={IsNumAllowed}
            onChange={() => setNum((prev) => !prev)}
            />
            <label>Numbers</label><br />
            <input 
            type="checkbox"
            defaultChecked={IsCharAllowed}
            onChange={() => setChar((prev) => !prev)}
            />
            <label>Charecters</label>

          </div>
        </div>
        

      </div>
    </>
  )
}

export default PwdGenrater