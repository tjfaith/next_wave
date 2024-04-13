import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Next Wave Labs </title>
                    <meta name="description" content="We are digital" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
