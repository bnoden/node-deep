// Node event loop demonstration with pseudocode

import somefile from 'somefile';

const pending = {
  timers: [],
  OSTasks: [],
  operations: []
};

// New timers, tasks, and operations are recorded while somefile is running
somefile.runContents();

const shouldContinue = () => {
  const { timers, OSTasks, operations } = pending;
  // Check 1: Pending setTimeout, setInterval, or setImmediate
  // Check 2: Pending OS tasks (ie. server listening to port)
  // Check 3: Pending long-running operations (ie. fs module)
  return timers.length || OSTasks.length || operations.length;
};

// Entire body executes in one 'tick'
while (shouldContinue()) {
  // 1: Any timers ready to be called?
  // 2: OSTasks or operations? Call relevant callbacks.
  // 3: Pause execution. Continue at end of pending.*[function()]
  // 4: Look at timers. Call any setImmediate.
  // 5: Handle any 'close' events. (ie. readStream.on('close', ()=>{closeEvent()}))
}

// exit back to terminal
