import React, { Component } from 'react';
import PreviewCollection from '../../components/preview-collections/PreviewCollection';

import './ShopPage.scss';
import SHOP_DATA from'./shop-data'



class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollections}) => (
                        <PreviewCollection key={id} {...otherCollections} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;