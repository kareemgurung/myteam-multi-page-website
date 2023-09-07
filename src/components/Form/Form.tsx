import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import styles from "./form.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { TContactSchema, contactSchema } from "../../types/message";



const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: TContactSchema) => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.container}
      noValidate
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          disabled={isSubmitting}
          {...register("name")}
          required
        />
        <p className={styles.error}>{errors.name?.message}</p>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          disabled={isSubmitting}
          {...register("email")}
          required
        />
        <p className={styles.error}>{errors.email?.message}</p>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="company"
          placeholder="Company Name"
          disabled={isSubmitting}
          {...register("companyName")}
          required
        />
        <p className={styles.error}>{errors.companyName?.message}</p>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          id="title"
          placeholder="Title"
          disabled={isSubmitting}
          {...register("title")}
          required
        />
        <p className={styles.error}>{errors.title?.message}</p>
      </div>
      <div className={styles.textareaContainer}>
        <textarea
          id="message"
          rows={3}
          placeholder="Message"
          disabled={isSubmitting}
          {...register("message")}
          required
        />
        <p className={styles.error}>{errors.message?.message}</p>
      </div>

      <Button name="submit" color="secondary" typeOfButton="submit" />
    </form>
  );
};

export default Form;
