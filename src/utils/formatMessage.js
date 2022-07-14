// Error message starts with an uppercase letter and ends with a period.
// Pass in errors.password or errors.email
const formatMessage = (errors) =>
  `${errors.message.charAt(0).toUpperCase() + errors.message.slice(1)}.`;

export default formatMessage;
