import { useCallback, useState } from 'react';

export function useRerender() {
  const [_, result] = useState(); //NOSONAR
  return useCallback(() => result(undefined), [result]);
}
