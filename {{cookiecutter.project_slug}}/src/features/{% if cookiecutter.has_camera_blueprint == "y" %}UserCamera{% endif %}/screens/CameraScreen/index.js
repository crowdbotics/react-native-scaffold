'use strict';
import React, { PureComponent } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends PureComponent {

  constructor(props) {
    super(props);
  }

  androidCameraPO: {
    title: 'Permission to use camera',
    message: 'We need your permission to use your camera',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
  };

  androidRecordAudioPO: {
    title: 'Permission to use audio recording',
    message: 'We need your permission to use your audio',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={ this.androidCameraPO }
          androidRecordAudioPermissionOptions={ this.androidRecordAudioPO }
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={ styles.camera }>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={ styles.testFont }> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  testFont: {
    fontSize: 14
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('CameraScreen', () => CameraScreen);
