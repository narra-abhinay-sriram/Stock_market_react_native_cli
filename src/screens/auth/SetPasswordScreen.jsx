import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { validatePasswordLength } from '../../utils/Validate';

const SetPasswordScreen = ({route}) => {
    const [password,setpassword] = useState('');
    const [passwordError,setPasswordError]=useState('');
    const [loading,setloading]=useState(false);
    const validate =()=>{
        if(!validatePasswordLength(password))
        {
          setPasswordError('Enter valid password')
          return false;
        }
        return true;
    }
    const handleSubmit =async()=>{
            setloading(true)
            setTimeout=(()=>{
              if(validate())
              {
                
              }
            },2000)
    }
  return (
    <View>
      <Text>SetPasswordScreen</Text>
    </View>
  )
}

export default SetPasswordScreen