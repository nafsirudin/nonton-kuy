import React, {Component} from "react";
import BreadCrumb from "../components/BreadCrumb";
class NotFoundPage extends Component {
    render() { 
        return (
            <div>
                <BreadCrumb breadcrumb_title="Not Found 404" breadcrumb_subtitle="" />
            </div>
        );
    }
}
 
export default NotFoundPage;