var React = require('react');
var ReactDom = require('react-dom');
var ReactF1 = require('react-f1');
var ReactF1Graph = require('react-f1-graph');
var Button = require('./lib/components/Button');
var getTransitions = require('./lib/components/Button/getTransitions');

document.body.style.background = '#000';

var container = document.body.appendChild(
  document.createElement('div')
);

render('out');
render('idle');

function render(state) {
  console.log('render', state);

  ReactDom.render(
    <div>
      <Button 
        go={state}
        onMouseOver={render.bind(null, 'over')}
        onMouseOut={render.bind(null, 'idle')}
        onClick={render.bind(null, 'out')}
      />
      <ReactF1Graph
        go={state}
        states={{
          out: [60, 0],
          idle: [60, 100],
          over: [260, 40]
        }}
        transitions={getTransitions()}
        style={{
          position: 'absolute',
          left: 200,
          top: 20
        }}
        colorDot={'rgba(255, 255, 255, 0.5)'}
        sizeDot={20}
        colorLine={'#00CAFE'}
        colorArrow={'#00CAFE'}
        colorLabel={'#FFF'}
      />
    </div>,
    container
  );  
}