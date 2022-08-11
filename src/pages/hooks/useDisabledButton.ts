import { useState, useEffect } from "react";

export const useDisabledButton = (fields: Record<"id", string>[]) => {
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (fields.length > 0) {
      setDisabled(false);
    }
  }, [fields]);

  return disabled;
};
