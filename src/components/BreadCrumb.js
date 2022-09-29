const BreadCrumb = (props) => {
    return(
        <div className="gen-breadcrumb" style={{backgroundImage: `url('/assets/images/background/asset-25.jpg')`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav aria-label="breadcrumb">
                            <div className="gen-breadcrumb-title">
                                <h1>
                                    {props.breadcrumb_title}
                                </h1>
                            </div>
                            <div className="gen-breadcrumb-container">
                                {props.breadcrumb_subtitle}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;