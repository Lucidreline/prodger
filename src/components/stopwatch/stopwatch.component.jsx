import React from 'react';

import FormatTime from './stopwatch.utils';

function stopwatch({ seconds }) {
  return (
    <div className='stopwatch'>
      <h3 className='stopwatch-time-display'>{FormatTime(seconds)}</h3>
    </div>
  );
}

export default stopwatch;
