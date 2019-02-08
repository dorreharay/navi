import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

import { fetchHouseMap } from '../../actions/actions';

const mapStateToProps = state => ({
  templates: state.Home.templates,
  properties: state.Home.properties,
});

const mapDispatchToProps = dispatch => ({
  fetchHouseMap: () => dispatch(fetchHouseMap()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
