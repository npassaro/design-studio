import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/home_app_action_creators';
import homeAppReducer from '../reducers/home_app_reducer';

import LinksList from './home/links_list';
import { TriangleIcon, CircleIcon, SquareIcon } from './home/icons';
import IconBox from './home/icon_box';

class Home extends Component {
  renderWelcome(brand) {
    if (brand) {
      return <img alt={this.props.brand} src="https://unsplash.it/800" />;
    }
    return null;
  }

  render() {
    return (
      <div className="full-vertical">
        <div className="brand-center">P H Y Y S . d e s i g n . s t u d i o</div>
        <div className="row align-top medium-unstack two-thirds expanded">
          <IconBox
            className="full-vertical small-2 columns"
            link={<LinksList actions={this.props.actions} />}
          >
            <SquareIcon />
          </IconBox>
          <div className="full-vertical columns">{this.renderWelcome(this.props.brand)}</div>
        </div>
        <div className="row medium-unstack one-third align-bottom expanded">
          <IconBox
            className={['columns']}
            link={<a href="/" className="link--circleBox">Contact & Newsletter</a>}
          >
            <CircleIcon />
          </IconBox>
          <IconBox
            className={['columns', 'align-right']}
            link={<a href="/" className="link--triangleBox">Shop</a>}
          >
            <TriangleIcon />
          </IconBox>
        </div>
      </div>
    );
  }
}

Home.defaultProps = {
  brand: '',
};

Home.propTypes = {
  brand: PropTypes.node,
  actions: PropTypes.shape({
    linkListMouseLeave: PropTypes.func.isRequired,
    linkListMouseEnter: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => homeAppReducer(state);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});


const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
