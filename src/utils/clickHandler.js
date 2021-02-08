export const searchHandler = (evt, setValue) => {
  evt.preventDefault();
  const { value } = evt.target;
  setValue(value);
};
