import { useEffect, useRef, useState } from "react";
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
  const addressRef = useRef()
  const imageRef = useRef()
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

  const addMeetupHandler = async (e) => {
    e.preventDefault();
    if (!isFormValid) return console.log("Invalid meetup form");

    const meetup = {
      title: titleValue,
      description: descValue,
      address: addressRef.current.value,
      image: imageRef.current.value,
    }

    const result = await fetch('/api/add-meetup', {
      body: JSON.stringify(meetup),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(result)

    // RESET INPUTS
    resetTitle();
    resetDesc();
    addressRef.current.value = ''
    imageRef.current.value = ''
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
        <p>Where you want to meet:</p>
        <input type="text" ref={addressRef} name="address" placeholder="Address" />
      </label>
      <label>
        <p>URL of the image you want to use:</p>
        <input name="image" ref={imageRef} placeholder="URL of image" ></input>
      </label>
      <label>
        <p>Describe your meetup:</p>
        <textarea
          onChange={setDescValue}
          onBlur={makeDescActive}
          value={descValue}
          name="description"
          placeholder="Description"
        />
        {descError && <small>{descError}</small>}
      </label>
      <button type="submit" className={(!isFormValid && classes.hidden) || ""}>
        Add Meetup
      </button>
    </form>
  );
};

export default AddMeetup;
