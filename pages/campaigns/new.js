import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";

class CampaignNew extends Component {
  state = {
    minimunContribution: "",
    errorMessage: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimunContribution)
        .send({
          from: accounts[0],
        });
    } catch (e) {
      this.setState({ errorMessage: e.message });
    } finally {
    }
  };

  render() {
    return (
      <Layout>
        <h3>Create New Campaign</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="Wei"
              labelPosition="right"
              value={this.state.minimunContribution}
              onChange={(event) =>
                this.setState({ minimunContribution: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Error..." content={this.state.errorMessage} />
          <Button primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
