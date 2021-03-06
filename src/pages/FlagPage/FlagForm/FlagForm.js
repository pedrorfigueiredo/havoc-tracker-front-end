import React from "react";
import {
  Wrapper,
  Form,
  Greetings,
  Title,
  InputGroup,
  Input,
  Button,
  Loader,
  Error,
} from "./styles";
import Modal from "../../../components/Modal";

const FlagForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  modal,
  onCloseModal,
  username,
}) => {
  return (
    <Wrapper>
      {isSubmitting ? (
        <Loader />
      ) : (
        <Form>
          <Greetings>Welcome {username}</Greetings>
          <Title htmlFor="infected">Enter the infected name</Title>
          <InputGroup>
            <Input
              id="infected"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.infected}
            />
            <Error>{touched.infected && errors.infected}</Error>
          </InputGroup>
          <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      )}
      {modal.status && (
        <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
      )}
    </Wrapper>
  );
};

export default FlagForm;
