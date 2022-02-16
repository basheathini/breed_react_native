import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import breedsCallCreator from '../../actionCreatorSubBreeds';

class ViewBreeds extends Component {
  constructor(props) {
    super(props);
  }

  viewFullImage = (value: String) => {
    this.props.navigation.navigate('ViewImage', {image: value} )
  }

  renderItem = ({ item } ) => (
    <TouchableOpacity style={styles.containerCard}  onPress={() => this.viewFullImage(item)} >
      <Image 
        style={styles.image}
        source={{
          uri: item,
        }} />   
    </TouchableOpacity>
  )

  render() {
    const { images } = this.props;
    if (images) {
      return (
        <FlatList
          data={images}
          keyboardShouldPersistTaps={'handled'}
          style={styles.flatlist}
          numColumns={1}
          onEndReached={this.handleBottomReached}
          onEndReachedThreshold={0.5}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    breedsCallCreator: dispatch(breedsCallCreator(ownProps.route.params.breed)),
  }
};

const mapStateToProps = state => {
  return {
    images: state.breedReducer.data.message,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBreeds);

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
    height: 250, 
  },
});
