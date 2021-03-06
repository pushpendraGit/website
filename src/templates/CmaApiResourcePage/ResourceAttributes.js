import React from 'react';
import sortObject from 'sort-object';
import bem from 'utils/bem';

import './ResourceAttributes.sass';
import Anchor from 'components/Anchor';

const b = bem.lock('ResourceAttributes');

function joinAnd(a, and = 'and') {
  if (a.length === 1) {
    return a[0];
  }

  return `${a.slice(0, -1).join(', ')} ${and} ${a.slice(-1)}`;
}

export default class ResourceAttributes extends React.Component {
  renderAttribute(name, schema) {
    let schemaType = schema.type || [];

    if (!Array.isArray(schema.type)) {
      schemaType = [schemaType];
    }

    const isOptional = schemaType.find(t => t === 'null');

    schemaType = schemaType.filter(type => type && type !== 'null');

    return (
      <tr key={name}>
        <td className={b('attribute-left')}>
          <code className={b('attribute-name')}>{name}</code>
          <code className={b('attribute-type')}>
            {schemaType.sort().join(', ')}
          </code>
        </td>
        <td>
          {schema.description && (
            <>
              <p>{schema.description}</p>
              {!isOptional && (
                <div className={b('attribute-required')}>
                  This attribute is required
                </div>
              )}
            </>
          )}
        </td>
      </tr>
    );
  }

  render() {
    const { resource } = this.props;
    const links = resource.links.map(l => l.title);

    if (!resource.attributes || Object.keys(resource.attributes).length === 0) {
      return null;
    }

    return (
      <>
        <h3 id="object">
          <Anchor id="object" />
          The {resource.title} object
        </h3>
        <p>
          A {resource.title} object is returned as part of the response body of
          each successful {joinAnd(links, 'or')} API call. The following table
          contains the list of all its fields along with their type, description
          and example values.
        </p>
        <h6>Object fields:</h6>
        <table className="ResourceAttributes">
          <tbody>
            {Object.entries(sortObject(resource.attributes)).map(
              ([name, schema]) => this.renderAttribute(name, schema),
            )}
          </tbody>
        </table>
      </>
    );
  }
}
