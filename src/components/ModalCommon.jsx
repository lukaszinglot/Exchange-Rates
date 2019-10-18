import React from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

const ModalCommon = props => {
  return (
    <>
      <Icon
        name="add circle"
        size="massive"
        color="blue"
        onClick={props.onClick}
        className="plus"
      />
      <Modal open={props.open} onClose={props.onClose}>
        <Modal.Header>{props.text}</Modal.Header>
        <Form onSubmit={props.onSubmit} id="form">
          <Modal.Content>
            <Form.Input
              placeholder="Title"
              type="text"
              value={props.inputTextValue}
              onChange={props.onInputChange}
            />

            <Form.Input
              placeholder="How many"
              type="number"
              step="0.1"
              //   pattern="[0-9]+([\.,][0-9])?"
              value={props.inputNumberValue}
              onChange={props.onNumberChange}
            />
          </Modal.Content>
          <Modal.Actions className="ui segment">
            <Button type="button" onClick={props.onClose} inverted color="red">
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
