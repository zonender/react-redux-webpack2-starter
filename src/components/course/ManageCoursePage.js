import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    );
  }
}

ManageCoursePage.PropTypes = {
  //
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)
