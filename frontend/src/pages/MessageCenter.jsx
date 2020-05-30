import React, { Component } from "react";
import { connect } from "react-redux";

class MessageCenter extends React.Component {
  state = {
    msgByUser: null,
    msgByResponder: null,
    openTab: 'inbox'
  };

  componentDidMount() {
    if (!this.props.loggedInUser.msgs) return
    // this.props.loadUsers();
    // this.setState({ rating: this.props.users })
    const currUser = this.props.loggedInUser;
    console.log(currUser._id, 'id');
    const { msgs } = currUser;
    console.log('msgs', msgs);
    console.log('user', this.props.loggedInUser);
    const userMsg = msgs.filter((msg) => msg.sentBy._id == currUser._id)
    const responderMsg = msgs.filter((msg) => msg.sentBy._id !== currUser._id)
  }


  openMsgs = (tab) => {
    this.setState({ openTab: tab })

  }

  render() {
    const { openTab } = this.state
    return (
      <div className="messege-center-container flex">
        <div className="ui secondary pointing menu">
          <div onClick={() => this.openMsgs('inbox')}
            className={`item ${openTab === "inbox" ? "active" : ''}`} >Inbox</div>
          <div onClick={() => this.openMsgs('sent')}
            className={`item ${openTab === "sent" ? "active" : ''}`}>Sent</div>
        </div>
        {openTab === "sent" && <div>my messges</div>}
        {openTab === "inbox" && <div>sent to me</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.user.loggedInUser,
  }
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCenter);
