'use client';

import { useState } from 'react';

export default function () {
  const [state, setState] = useState(0);

  return <button onClick={() => setState(state + 1)}>{state}</button>;
}
