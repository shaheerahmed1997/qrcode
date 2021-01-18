
import React,{useEffect,useState,useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { RSA } from 'react-native-rsa-native';

const App= ()  => {
  const [data,setdata] = useState("")
  const [scan,setscan] = useState(false)

  const onSuccess = (e) => {
    console.log(e)
    setdata(e)
    console.log(data)
    setscan(false)
  };


    if(!scan)
    {
  return(
    


    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <View style={{paddingHorizontal:10}}>
      <Text>
        {data.data}
      </Text>
      <Text>
        {data.rawData}
      </Text>

      </View>
      <TouchableOpacity style={{width:"90%",height:30,justifyContent:"center",alignItems:"center"}}
      onPress={()=>setscan(true)}
      >


        
        <Text>Scane Qr Code</Text>
      </TouchableOpacity>

    </View>
    
  )
    }
    else{
      return(
         <QRCodeScanner
        onRead={onSuccess}
    //    flashMode={RNCamera.Constants.FlashMode.torch}
    showMarker={true}
        
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />


      )

    }
      }
      const styles = StyleSheet.create({
        centerText: {
          flex: 1,
          fontSize: 18,
          padding: 32,
          color: '#777'
        },
        textBold: {
          fontWeight: '500',
          color: '#000'
        },
        buttonText: {
          fontSize: 21,
          color: 'rgb(0,122,255)'
        },
        buttonTouchable: {
          padding: 16
        }
      });
export default App;
