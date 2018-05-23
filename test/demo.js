import React, { Component } from 'react';
import {render} from 'react-dom';
import JsonInspector from 'react-json-inspector';
import 'react-json-inspector/json-inspector.css';
import WebglSpecs from '../';

const specs = WebglSpecs();

render(
  <JsonInspector data={specs} />,
  document.getElementById('root')
);
