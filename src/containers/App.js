import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as userActions from '../actions/UserActions'
// import { hot } from 'react-hot-loader'

class App extends Component {
	render() {
		const { user, page } = this.props
		const { getPhotos } = this.props.pageActions
		const { handleLogin } = this.props.userActions

		return <div className="app">
			<User name={user.name} handleLogin={handleLogin} error={user.error} />
			<Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />
		</div>
	}
}

function mapStateToProps(state) {
	return {
		user: state.user,
		page: state.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch)
	}
}

// export default hot(module)(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)