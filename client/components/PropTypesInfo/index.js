/**
 * Shows information about the propTypes of a component
 */

import React from 'react';
import PropTypeInfo from './PropTypeInfo';

class PropTypesInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>Props</h2>
        {(this.props.meta.props) ? (
          Object.keys(this.props.meta.props).map((name) => {
            return (
              <PropTypeInfo
                key={ name }
                name={ name }
                data={ this.props.meta.props[name] }
              />
            );
          })
        ) : null}
      </div>
    );
  }
}

export default PropTypesInfo;
