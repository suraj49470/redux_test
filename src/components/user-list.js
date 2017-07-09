import React from 'react';
import {connect} from 'react-redux';
import {userSelected} from './../actions/index';
import {bindActionCreators} from 'redux';

class UserList extends React.Component{

     createUserList(){
         return this.props.users.map((user) => {
             return(
                 <li
                     onClick={() => {this.props.userSelected(user)}}
                     key={user.id}
                 >
                     {user.name}
                 </li>
             );
         });
     }

    render(){
        return(
            <ul>
                { this.createUserList() }
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        users : state.users
    };
}
function matchDispatchToProps(dispatch) {
      return bindActionCreators({userSelected:userSelected},dispatch);
}

export  default connect(mapStateToProps,matchDispatchToProps)(UserList);