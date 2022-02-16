import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import breedsCallCreator from '../../actionCreatorSubBreeds';

export default class ViewImage extends Component {
  constructor(props) {
    super(props);
  }

//   renderItem = ({ item } ) => (
//     <TouchableOpacity style={styles.containerCard}  onPress={() => this.viewFullImage(item)} >
//       <Image 
//         style={styles.image}
//         source={{
//           uri: item,
//         }} />   
//     </TouchableOpacity>
//   )

  render() {
    const { image  } = this.props.route.params
      return (
        <Image
         style={styles.image}
         resizeMode="stretch" resizeMethod="resize"
         source={{
            uri: image,
          }} /> 
      );
    }
  }

const styles = StyleSheet.create({
  weightOptionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: -20,
    paddingLeft: 20,
    width: Dimensions.get('screen').width
  },
  allItemsContent: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden'
  },
  containerCard: {
    width: Dimensions.get('screen').width,
    height: 250, 
    margin: 8, 
    borderRadius: 3
  },
  firstLetter: {
    color: '#000000', 
    fontWeight:'900',  
    fontSize: 16, 
    textAlign: 'center',
    top: 30
  },
  breedHeader: {
    color: '#000000', 
    textAlign: 'center',
    top: 45
  },
  flatlist: {
    flexDirection: 'column', 
    marginBottom: 10
  },
  image: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height, 
  },
});
