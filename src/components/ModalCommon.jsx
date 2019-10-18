import React from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

const ModalCommon = ({
  onClick,
  onClose,
  open,
  text,
  onSubmit,
  inputTextValue,
  onInputChange,
  inputNumberValue,
  onNumberChange
}) => {
  return (
    <>
      <Icon
        name="add circle"
        size="massive"
        color="blue"
        onClick={onClick}
        className="plus"
      />
      <Modal open={open} onClose={onClose}>
        <Modal.Header>{text}</Modal.Header>
        <Form onSubmit={onSubmit} id="form">
          <Modal.Content>
            <Form.Input
              placeholder="Title"
              type="text"
              value={inputTextValue}
              onChange={onInputChange}
            />

            <Form.Input
              placeholder="How many"
              type="number"
              step="0.1"
              value={inputNumberValue}
              onChange={onNumberChange}
            />
          </Modal.Content>
          <Modal.Actions className="ui segment">
            <Button type="button" onClick={onClose} inverted color="red">
              Cancel
            </Button>
            <Button type="submit" value="Submit" inverted color="green">
              Submit
            </Button>
          </Modal.Actions>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCommon;
