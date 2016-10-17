import React, { Component, PropTypes } from 'react';
import DemoPage from './DemoPage.react';
import './DemoPageIndex.less';
import ToolApplicationHeader from './ToolApplicationHeader';
import localLoader from '../local-loader/index';

export default
class DemoPageIndex extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ToolApplicationHeader
              applicationName="Showroom"
              repositoryUrl="http://buildserver.jcatalog.com/gitweb/?p=showroom.git"
              contacts={[
                { name: 'alexey.sergeev@jcatalog.com', email: 'alexey.sergeev@jcatalog.com' },
                { name: 'kirill.volkovich@jcatalog.com', email: 'kirill.volkovich@jcatalog.com' }
              ]}
            />
          </div>
          <div className="col-xs-12">
            <DemoPage loader={this.props.loader.init(this.props.loaderOptions)} />
          </div>
        </div>
      </div>
    );
  }
}

DemoPageIndex.propTypes = {
  loader: PropTypes.object.isRequired,
  loaderOptions: PropTypes.object
};

DemoPageIndex.defaultProps = {
  loader: localLoader,
  loaderOptions: {}
};
