import { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import PageHeader from '../../components/PageHeader/PageHeader'
import './InventoryPage.scss'

class InventoryPage extends Component {
    render () {
        return (
            <>
                <PageHeader path={this.props.match.url}/> 
                <section className="inventory-wrapper">
                    
                </section>
            </>
        )
    }
}

export default InventoryPage