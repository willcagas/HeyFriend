  import React, {Component} from 'react';
   import {DatePickerIOS, View, StyleSheet} from 'react-native';
   
   export default class App extends Component {
     constructor(props) {
       super(props);
       this.state = {chosenDate: new Date()};
   
       this.setDate = this.setDate.bind(this);
     }
   
     setDate(newDate) {
       this.setState({chosenDate: newDate});
     }
   
     render() {
       return (
         <View style={styles.container}>
           <DatePickerIOS
             date={this.state.chosenDate}
             onDateChange={this.setDate}
             mode={"date"}
             maximumDate={new Date("December 31, 2006")}
             minimumDate={new Date("December 31, 2002")}
           />
         </View>
       );
     }
   }
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
     },
   });