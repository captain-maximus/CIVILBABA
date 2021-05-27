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
import {common} from '../constants/Common';

const MainScreen = () => {
  const [mobileNo, setMobileNo] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [text, setText] = useState(
    common.ENTER_NUMBER,
  );
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);

  const enterPressed = () => {
    if (!mobileNo || mobileNo.length < 10) {
      setIsValid(false);
      setText(common.ERROR_VALID);
    } else {
      setIsLoaderVisible(true);
      setTimeout(() => {
        setIsValid(false);
        setText(
          common.ERROR_REGISTERED,
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
          <Text style={styles.titleStyle}>{common.APP_TITLE}</Text>
        </View>

        {/* Bottom Container */}

        <View style={styles.bottomContainer}>
          <Text style={[styles.termsTitleStyle, {marginBottom: 6}]}>
            {common.TERMS_FIRST_LINE}
          </Text>
          <View style={styles.termsContainerStyle}>
            <Text
              style={[
                styles.termsTitleStyle,
                {color: 'white', marginRight: 6},
              ]}>
              {common.TERMS_AND_SERVICES}
            </Text>
            <Text style={styles.termsTitleStyle}>{common.AND}</Text>
            <Text
              style={[styles.termsTitleStyle, {color: 'white', marginLeft: 6}]}>
              {common.PRIVACY_POLICY}
            </Text>
          </View>
        </View>

        {/* Form Container */}

        <View style={styles.infoStyle}>
          <View style={styles.infoContainerStyle}>
            <Text
              style={[
                styles.errorTextStyle,
                {color: isValid ? 'black' : 'red'},
              ]}>
              {text}
            </Text>
            <TextInput
              style={styles.mobileInputStyle}
              placeholder={common.MOBILE_NUMBER}
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
              <Text style={styles.buttonTitleStyle}>{common.ENTER}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.backShadow} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MainScreen;
