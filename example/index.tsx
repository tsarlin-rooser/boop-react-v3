// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Button } from '../.';

const App = () => {
  const onClick = React.useCallback(() => alert('I am a button styled component!'), []);
  return (
    <div className="ml-l">
      <br />
      <Thing />
      <br />
      <br />
      <div className="flex">
        <div style={{ width: '20%'}}>
          <Button text="primary" variant="primary" onClick={onClick} />
          <br />
          <br />
          <br />
          <Button text="secondary" variant="secondary" onClick={onClick} />
          <br />
          <br />
          <br />
          <Button text="tertiary" variant="tertiary" onClick={onClick} />
          <br />
          <br />
          <br />
          <Button text="destructive" variant="destructive" onClick={onClick} />
        </div>
        <div style={{ width: '20%'}}>
          <Button text="primary" variant="primary" onClick={onClick} size="large" />
          <br />
          <br />
          <Button text="secondary" variant="secondary" onClick={onClick} size="large" />
          <br />
          <br />
          <Button text="tertiary" variant="tertiary" onClick={onClick} size="large" />
          <br />
          <br />
          <Button text="destructive" variant="destructive" onClick={onClick} size="large" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
