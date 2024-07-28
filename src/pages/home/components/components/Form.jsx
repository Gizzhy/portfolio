import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "./form.module.scss";

export default function Form() {
  const [state, handleSubmit] = useForm("movaepjw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <br />
        <input
          id="name"
          type="name"
          name="name"
          className={styles.formBody}
          placeholder="Your name"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          className={styles.formBody}
          placeholder="Your email"
        />
        <br />
        <label htmlFor="message" className={styles.formLabel}>
          Message
        </label>
        <br/>
        <textarea
          id="message"
          name="message"
          className={styles.formBody2}
          placeholder="Write something nice :)"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <br />
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.formButton}
        >
          Submit
        </button>
      </form>
    </>
  );
}
