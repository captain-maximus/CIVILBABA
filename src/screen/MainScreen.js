import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {styles} from './styles';

const MainScreen = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [text, setText] = useState(
    'Use your registered mobile number to log in:',
  );
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const enterPressed = () => {
    if (!mobileNo || mobileNo.length < 10) {
      setIsValid(false);
      setText('* Please enter a valid mobile number .');
    } else {
      setIsLoaderVisible(true);
      setTimeout(() => {
        setIsValid(false);
        setText(
          '* The mobile number you have entered is not registered with us. PLease enter a registered mobile number .',
        );
        setIsLoaderVisible(false);
      }, 2000);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <KeyboardAvoidingView>
        {/* Top Container */}

        <View style={styles.topContainer}>
          <Image
            style={styles.iconStyle}
            source={require('../assets/icon.png')}
            resizeMode={'contain'}
          />
          <Text style={styles.titleStyle}>CIVILBABA</Text>
        </View>

        {/* Bottom Container */}

        <View style={styles.bottomContainer}>
          <Text style={[styles.termsTitleStyle, {marginBottom: 6}]}>
            By signing in , you agree to our
          </Text>
          <View style={styles.termsContainerStyle}>
            <Text
              style={[
                styles.termsTitleStyle,
                {color: 'white', marginRight: 6},
              ]}>
              terms and services
            </Text>
            <Text style={styles.termsTitleStyle}>and</Text>
            <Text
              style={[styles.termsTitleStyle, {color: 'white', marginLeft: 6}]}>
              privacy policy.
            </Text>
          </View>
        </View>

        {/* Form Container */}

        <View style={styles.infoStyle}>
          <View style={styles.infoContainerStyle}>
            <Text
              style={[
                styles.errorTextStyle,
                {color: isValid ? 'Black' : 'red'},
              ]}>
              {text}
            </Text>
            <TextInput
              style={styles.mobileInputStyle}
              placeholder="MOBILE  NUMBER"
              placeholderTextColor="black"
              maxLength={10}
              keyboardType={'numeric'}
              onChangeText={text => setMobileNo(text)}
            />
            <TouchableOpacity
              onPress={enterPressed}
              style={styles.enterButtonStyle}>
              {isLoaderVisible ? (
                <ActivityIndicator size="small" color="#fbb03b" />
              ) : null}
              <Text style={styles.buttonTitleStyle}>ENTER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.backShadow} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainScreen;
