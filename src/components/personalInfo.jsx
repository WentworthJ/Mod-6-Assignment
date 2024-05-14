import {useState} from 'react';

function PersonalInfo (props) {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        email: "",
        phone: ""
    });

    const handleFullNameInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, fullName: e.target.value}
        ))
        props.onChange({...personalInfo, fullName: e.target.value})
    }
    const handleEmailInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, fullName: e.target.value}
        ))
        props.onChange({...personalInfo, email: e.target.value})

    }
    const handlePhoneInputChange = (e) => {
        setPersonalInfo(prevInfo => (
            {...prevInfo, fullName: e.target.value}
        ))
        props.onChange({...personalInfo, phone: e.target.value})

    }

    return(
      <div>
        <h2>Personal Information</h2>
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={personalInfo.fullName} onChange={handleFullNameInputChange}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={personalInfo.email} onChange={handleEmailInputChange}/>
            </div>
            <div>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phone" value={personalInfo.phone} onChange={handleFullPhoneInputChange}/>
            </div>

      </div>
    )
}