import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  content: {
    flex: 1,
    padding: 20
  },
  item: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 10,
    marginBottom: 5
  },
  input: {
    alignSelf: 'stretch',
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 16
  },
  disabled: {
    color: 'grey'
  }
});
