import React, {Component} from 'react';
import { useEffect } from 'react';
import {View, Image, StyleSheet, FlatList, Text, Dimensions, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import api from '../../actionCreatorDogCategory';

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }


  viewBreeds = (value: String) => {
    this.props.navigation.navigate('ViewBreeds', {breed: value} )
  }


  renderItem = ({ item } ) => (
    <TouchableOpacity style={styles.containerCard}  onPress={() => this.viewBreeds(item)} >
      <Text style={styles.firstLetter}>{item.substring(0, 1).toUpperCase()}</Text>      
      <Text style={styles.breedHeader}>{item}</Text>
    </TouchableOpacity>
  )

  render() {
    const { allBreeds } = this.props;
    if (allBreeds) {
      return (
        <FlatList
          data={Object.keys(allBreeds)}
          keyboardShouldPersistTaps={'handled'}
          style={styles.flatlist}
          numColumns={2}
          columnWrapperStyle={styles.allItemsColumn}
          contentContainerStyle={styles.allItemsContent}
          keyExtractor={(item, index) => item}
          renderItem={this.renderItem}
        />
      );
    }else{
      return <View/>
    }
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  api: dispatch(api('breeds/list/all')),
});

const mapStateToProps = state => {
  return {
    allBreeds: state.reducer.data.message,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
  allItemsColumn: {
    flexDirection: 'row',

  },
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
    width: 175,
    height: 145, 
    backgroundColor: "#D3D3D3", 
    padding: 15, 
    margin: 8, 
    borderRadius: 5
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
  }
});
