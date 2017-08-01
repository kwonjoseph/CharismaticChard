import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import { setFriendsInfo, setDebtors } from '../actions/outputActions.js';
import $ from 'jquery';

const mapStateToProps = state => {
  return {
    friendsInfo: state.output.friendsInfo,
    splitter: state.final.splitter, 
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class ItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'person',
      item: this.props.item.item,
      price: this.props.item.price
    };
  }

  changeTitle (e) { 
    this.setState({
      name: e.target.title
    }, this.debtor);
  }

  debtor() {
    this.props.collectSplitItemInfo(this.state.name, this.state.item, this.state.price);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-4">
          <DropdownButton
            bsStyle="success"
            title={this.state.name}
            id="split-button-basic-Success"
            className="dropdownBtn"
          >
            
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemEntry);



// <MenuItem
//               onClick={this.changeTitle.bind(this)}
//               title={this.props.splitter.name.split(' ')[0]}
//             >
//               {this.props.splitter.name.split(' ')[0]}
//             </MenuItem>
//             {
//               this.props.friendsInfo.map((friendInfo, index) => ( 
//                 <MenuItem 
//                   key={index} 
//                   onClick={this.changeTitle.bind(this)} 
//                   title={friendInfo.friendName}
//                 >
//                   {friendInfo.friendName}
//                 </MenuItem>
//               ))
//             }