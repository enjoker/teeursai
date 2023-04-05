import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { Provider } from 'react-redux';
// import { store } from './src/store/store';
import Navigator from './src/navigation/navigator';

const App = () => {
  // const checkCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       // console.log("You can use the camera");
  //     }
  //     else {
  //       console.log("Camera permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  // useEffect(() => { checkCameraPermission() }, [])

  return (
    // <Provider store={store}>
    <Navigator />
    // </Provider>
  );
};

export default App;