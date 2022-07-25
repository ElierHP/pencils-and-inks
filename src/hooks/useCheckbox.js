import { useState } from "react";

export default function useCheckbox(label, label2, label3) {
  // Checkbox states
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  // Format the tags correctly for database usage.
  const format = (label) => label.toLowerCase().split(" ").join("-");

  return [
    {
      checked: checked,
      setChecked: setChecked,
      label: label,
      tag: format(label),
    },
    {
      checked: checked2,
      setChecked: setChecked2,
      label: label2,
      tag: format(label2),
    },
    {
      checked: checked3,
      setChecked: setChecked3,
      label: label3,
      tag: format(label3),
    },
  ];
}
