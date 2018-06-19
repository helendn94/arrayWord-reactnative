import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    getWordList() {
      const { myFillter, myWords } = this.props;
      if (myFillter === 'MEMORIZED') return myWords.filter(e => e.memorized);
      if (myFillter === 'NEED_PRACTICE') return myWords.filter(e => !e.memorized);
      return myWords;
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#e2e2e2' }}>
                <Header />
                <View style={{ flex: 10 }}>
                  { this.props.myIsAdding ? <Form /> : null}
                  <FlatList
                    data={this.getWordList()}
                    renderItem={({ item }) => <Word myWord={item} />}
                    _keyExtractor={(item) => item.id}
                  />
                </View>
                <Filter />
            </View>
        );
    }
}
function mapStateToProps(state) {
  return {
    myFillter: state.filterStates,
    myWords: state.arrWords,
    myIsAdding: state.isAdding,
  };
}
export default connect(mapStateToProps)(Main);
