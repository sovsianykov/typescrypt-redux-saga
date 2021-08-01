import React, {
  FormEvent,
  FunctionComponent,
  memo,
  useCallback,
  useState,
} from "react";
import searchIcon from "../../../assets/outline_search_white_24dp.png"
import styles from "./Form.module.scss";

interface FormProps {
  submit(word: string): void;
}

const Form: FunctionComponent<FormProps> = ({ submit }) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
    },
    [setTitle]
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      submit(title);
    },
    [submit, title]
  );
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="title" className={styles.label}>
        SEARCH
        <input
          type="text"
          value={title}
          placeholder="input the keyword"
          id="title"
          onChange={handleChange}
          className={styles.formInput}
        />
      </label>
    </form>
  );
};

export default memo(Form);
