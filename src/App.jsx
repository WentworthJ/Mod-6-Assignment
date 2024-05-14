import { useState } from 'react'
import './App.css'
import PersonalInfo from 'src/components/personalInfo'
// The camel case seems to be the same but line 3 still breaks
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phone: ""
  })

  const handlePersonalInfoUpdate = (updatedInfo) => {
    setPersonalInfo(updatedInfo)
  }

  return (
    <>
    <div>
      <PersonalInfo onChange={handlePersonalInfoUpdate}></PersonalInfo>    
    </div>
      <div>
        <h1>{personalInfo.fullName}</h1>
        <h2>{personalInfo.email}</h2>
        <h2>{personalInfo.phone}</h2>
      </div>
    </>
  )
}

export default App
