import { useState } from "react";

export default function useCheckbox(
  [...labels],
  firstBoolean = false,
  boolean = false
) {
  // If first checkbox needs to start out checked, set firstBoolean to true.
  // If everything needs to start out checked, set boolean to true.
  const [checked, setChecked] = useState(firstBoolean);
  const [checked2, setChecked2] = useState(boolean);
  const [checked3, setChecked3] = useState(boolean);
  const [checked4, setChecked4] = useState(boolean);
  const [checked5, setChecked5] = useState(boolean);
  const [checked6, setChecked6] = useState(boolean);
  const [checked7, setChecked7] = useState(boolean);
  const [checked8, setChecked8] = useState(boolean);

  // Format the tags correctly for database usage.
  const format = (label) => label.toLowerCase().split(" ").join("-");

  // Used to match each label to the correct state.
  const setState = (index) => {
    if (index === 0) return [checked, setChecked];
    if (index === 1) return [checked2, setChecked2];
    if (index === 2) return [checked3, setChecked3];
    if (index === 3) return [checked4, setChecked4];
    if (index === 4) return [checked5, setChecked5];
    if (index === 5) return [checked6, setChecked6];
    if (index === 6) return [checked7, setChecked7];
    if (index === 7) return [checked8, setChecked8];
  };

  // Loop through all the labels and create an array of objects with the correct state, label and tag.
  const generateArray = () => {
    const checkboxesArr = [];

    labels.forEach((label, index) => {
      checkboxesArr.push({
        checked: setState(index)[0],
        setChecked: setState(index)[1],
        label: label,
        tag: format(label),
      });
    });

    return checkboxesArr;
  };

  return generateArray();
}
