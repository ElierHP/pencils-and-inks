// Error message starts with an uppercase letter and ends with a period.
// Pass in errors.password or errors.email
export const formatErrorMessage = (errors) =>
  `${errors.message.charAt(0).toUpperCase() + errors.message.slice(1)}.`;

// Format first tag. First letter is uppercase || Used for product nav
export const formatTags = (tag) => {
  const formattedTag = tag
    .split("-")
    .map((string) => string.charAt(0).toUpperCase() + string.slice(1));

  return formattedTag.join(" ");
};

// Format category. First letter is uppercase || Used for product nav
export const formatCategory = (category) =>
  `${category.charAt(0).toUpperCase() + category.slice(1)}`;
