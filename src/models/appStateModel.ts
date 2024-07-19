import { useState } from 'react';

export default function () {
  const [state, setState] = useState();

  return { state, setState };
}
