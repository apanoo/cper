import React, { Component } from 'react';

import Value from './value/Value';

import styles from './Object.scss';

type Props = {};

export default class Object extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.object}>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
        <Value title="Test">
          <label>ttt</label>
        </Value>
      </div>
    );
  }
}
