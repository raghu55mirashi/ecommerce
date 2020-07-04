import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import CollectionPage from './collection'
import WithSpinner from '../../components/with-spinner/with-spinner'
import { selectIsCollectionLoaded } from '../../redux/shop/shop-selectors'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionContainer;