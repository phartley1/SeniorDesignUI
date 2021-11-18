import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';
import App from './app';

const width = 960;
const height = 500;
const CX = width/2;
const CY = height/2;
const strokewidth = 20;
const EOSX = 90;
const EOSY = 100;
const eyerad = 40;

const mouthArc = arc()
  .innerRadius(0)
  .outerRadius(100)
  .startAngle(0)
  .endAngle(Math.PI / 2);

const App = () => (
    <svg width = {width} height = {height}>
        
    </svg>
)