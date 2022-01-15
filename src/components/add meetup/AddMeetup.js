import { useEffect, useState } from "react";
import useValidator from "../../hooks/use-validator";
import classes from "./AddMeetup.module.css";

const titleValidator = (value) => {
  let isValid = value.length > 1;

  return isValid;
};
const descValidator = (value) => {
  let isValid = value.length >= 5;

  return isValid;
};

const AddMeetup = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const {
    error: titleError,
    isValid: isTitleValid,
    enteredValue: titleValue,
    makeActive: makeTitleActive,
    setValue: setTitleValue,
    reset: resetTitle,
  } = useValidator(titleValidator, "Title must contain at least 2 characters");
  const {
    error: descError,
    isValid: isDescValid,
    enteredValue: descValue,
    makeActive: makeDescActive,
    setValue: setDescValue,
    reset: resetDesc,
  } = useValidator(
    descValidator,
    "Description must contain at least 5 characters"
  );

  const addMeetupHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) return console.log("Invalid meetup form");

    resetTitle();
    resetDesc();
  };

  useEffect(() => {
    setIsFormValid(isTitleValid && isDescValid);
  }, [isTitleValid, isDescValid]);

  return (
    <form onSubmit={addMeetupHandler} className={classes.add_meetup}>
      <label>
        <p>Name your meetup:</p>
        <input
          onChange={setTitleValue}
          onBlur={makeTitleActive}
          value={titleValue}
          type="text"
          name="title"
          placeholder="Title"
        />
        {titleError && <small>{titleError}</small>}
      </label>
      <label>
        <p>Describe your meetup:</p>
        <input
          onChange={setDescValue}
          onBlur={makeDescActive}
          value={descValue}
          type="text"
          name="description"
          placeholder="Description"
        />
        {descError && <small>{descError}</small>}
      </label>
      <label>
        <p>Where you want to meet:</p>
        <input type="text" name="address" placeholder="Address" />
      </label>
      <button type="submit" className={(!isFormValid && classes.hidden) || ""}>
        Add Meetup
      </button>
    </form>
  );
};

export default AddMeetup;
