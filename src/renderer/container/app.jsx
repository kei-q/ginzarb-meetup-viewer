import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from './root';

import * as ProfilesActions from '../actions/profiles';

function mapStateToProps(state) {
    return {
        profiles: state.profiles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            profiles: bindActionCreators(ProfilesActions, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);