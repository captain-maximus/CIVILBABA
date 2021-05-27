import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    alignItems: 'center',
    height: windowHeight*0.6
  },
  bottomContainer: {
    backgroundColor: '#fbb03b',
    height: windowHeight*0.4,
    width: windowWidth,
    borderTopWidth: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 0,
  },
  termsTitleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 36,
  },
  iconStyle: {
    width: 150,
    height: 150,
  },
  backShadow: {
    position: 'absolute',
    height: 400,
    width: windowWidth - 128,
    backgroundColor: '#000',
    borderRadius: 32,
    zIndex: -1,
    marginLeft: 16,
    marginTop: 16,
    opacity: 0.3,
  },
  buttonTitleStyle: {
    color: '#fbb03b',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8
  },
  errorTextStyle: {
    fontWeight: 'bold',
    color: 'red',
    margin: 32,
    flex: 1,
    fontSize: 16
  },
  mobileInputStyle: {
    backgroundColor: 'white',
    marginHorizontal: 32,
    borderRadius: 8,
    borderWidth: 4,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 24,
  },
  enterButtonStyle: {
    marginHorizontal: 45,
    backgroundColor: 'black',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
    flexDirection: 'row',
  },
  infoContainerStyle: {
    height: 400,
    width: windowWidth - 128,
    backgroundColor: '#fbb03b',
    borderRadius: 32,
    borderWidth: 4,
  },
  termsContainerStyle: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 16
  },
  infoStyle: {
    position: 'absolute', zIndex: 1,
    bottom: windowWidth/3,
    alignSelf: 'center',

  }
});
