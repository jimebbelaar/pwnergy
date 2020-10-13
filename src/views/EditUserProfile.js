import React from "react";
import TagsInput from "react-tagsinput";
import {
  Alert,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardFooter,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormInput,
  FormSelect,
  FormCheckbox,
  FormTextarea,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "shards-react";

import FormSectionTitle from "../components/edit-user-profile/FormSectionTitle";
import ProfileBackgroundPhoto from "../components/edit-user-profile/ProfileBackgroundPhoto";

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        "User Experience",
        "UI Design",
        "React JS",
        "HTML & CSS",
        "JavaScript",
        "Bootstrap 4"
      ]
    };

    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTagsChange(tags) {
    this.setState({ tags });
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Container fluid className="px-0">
          <Alert theme="success" className="mb-0">
            De nieuwe maatregel is succesvol toegevoegd aan de database
          </Alert>
        </Container>
        <Container fluid className="main-content-container px-4">
          <Row>
            <Col lg="8" className="mx-auto mt-4">
              <Card small className="edit-user-details mb-4">
                <CardBody className="p-0">
                  <div className="border-bottom clearfix d-flex">
                    <Nav tabs className="border-0 mt-auto mx-4 pt-2">
                      <NavItem>
                        <NavLink active>Maatregel</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>..</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>..</NavLink>
                      </NavItem>
                    </Nav>
                  </div>

                  {/* Form Section Title :: General */}
                  <Form className="py-4" onSubmit={this.handleFormSubmit}>
                    <FormSectionTitle
                      title="Maatregel toevoegen"
                      description="Kwantitatieve details"
                    />
                    <Row form className="mx-4">
                      {/* Facebook */}
                      <Col md="6" className="form-group">
                        <label htmlFor="maatregelNaam">Naam maatregel</label>
                        <FormInput
                          id="maatregelNaam"
                          value="Toepassing OPIR - druk en flowmodule"
                          onChange={() => {}}
                        />
                      </Col>

                      {/* Twitter */}
                      <Col md="6" className="form-group">
                        <label htmlFor="maatregelOmschrijving">Beschrijving maatregel</label>
                        <FormInput
                          id="maatregelOmschrijving"
                          value="Toepassing van OPIR druk- en flowmodule op winlocaties. Afhankelijkheden zijn de aanwezigheid van frequentie geregelde pompen (niet per definitie noodzakelijk, wel gewenst), druk en flowmeters. Er is op dit moment geen Vitens-breed uitrolbeleid voor OPIR, maar OPIR is wel opgenomen in Visie Water Maken 2025."
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>

                    <hr />

                    <Row form className="mx-4">
                      <Col lg="12">
                        <Row form>
                          {/* Startjaar Besparing */}
                          <Col md="6" className="form-group">
                            <label htmlFor="startJaar" data-toggle="tooltip" title="Startjaar waarin maatregel besparing oplevert">Startjaar besparing</label>
                            <InputGroup seamless>
                              <InputGroupAddon type="prepend">
                                <InputGroupText>
                                  <i className="material-icons">access_time</i>
                                </InputGroupText>
                              </InputGroupAddon>
                            <FormInput
                              id="startJaar"
                              value="2020"
                              onChange={() => {}}
                            />
                            </InputGroup>
                          </Col>

                          {/* Opmerking Startjaar */}
                          <Col md="6" className="form-group">
                            <label htmlFor="opmerkingStartjaar">Opmerking</label>
                            <InputGroup seamless>
                              <InputGroupAddon type="prepend">
                                <InputGroupText>
                                  <i className="material-icons">notes</i>
                                </InputGroupText>
                              </InputGroupAddon>
                            <FormInput
                              id="opmerkingStartjaar"
                              value="Wordt al uitgerold, besparing is direct van toepassing"
                              onChange={() => {}}
                            />
                            </InputGroup>
                          </Col>
                          {/* Technische levensduur */}
                          <Col md="6" className="form-group">
                            <label htmlFor="technischeLevensduur">Technische levensduur</label>
                            <InputGroup seamless>
                              <InputGroupAddon type="prepend">
                                <InputGroupText>
                                  <i className="material-icons">av_timer</i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <FormInput
                                id="technischeLevensduur"
                                value="15"
                                onChange={() => {}}
                              />
                            </InputGroup>
                          </Col>

                          {/* Opmerking technische levensduur */}
                          <Col md="6" className="form-group">
                            <label htmlFor="opmerkingTechnischeLevensduur">Opmerking</label>
                            <InputGroup seamless>
                              <InputGroupAddon type="prepend">
                                <InputGroupText>
                                  <i className="material-icons">notes</i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <FormInput
                                id="opmerkingTechnischeLevensduur"
                                value="Na circa 15 jaar aan vervanging toe"
                                onChange={() => {}}
                              />
                            </InputGroup>
                          </Col>
                          {/* Financiële levensduur */}
                          <Col md="6" className="form-group">
                            <label htmlFor="financiëleLevensduur">Financiële levensduur</label>
                            <InputGroup seamless>
                              <InputGroupAddon type="prepend">
                                <InputGroupText>
                                  <i className="material-icons">av_timer</i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <FormInput
                                id="financiëleLevensduur"
                                value="10"
                                onChange={() => {}}
                              />
                            </InputGroup>
                          </Col>

                          {/* opmerkingFinancieleLevensduur */}
                          <Col md="6" className="form-group">
                            <label htmlFor="opmerkingFinancieleLevensduur">Opmerking</label>
                            <InputGroup seamless>
                              <InputGroupAddon type="prepend">
                                <InputGroupText>
                                  <i className="material-icons">notes</i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <FormInput
                                id="opmerkingFinancieleLevensduur"
                                value="Besturing / elektrotechnisch"
                                onChange={() => {}}
                              />
                            </InputGroup>
                          </Col>

                          {/*<Col md="6" className="form-group">*/}
                          {/*  <label htmlFor="displayEmail">*/}
                          {/*    Display Email Publicly*/}
                          {/*  </label>*/}
                          {/*  <FormSelect>*/}
                          {/*    <option>Select an Option</option>*/}
                          {/*    <option>Yes, display my email.</option>*/}
                          {/*    <option>No, do not display my email.</option>*/}
                          {/*  </FormSelect>*/}
                          {/*</Col>*/}
                        </Row>
                      </Col>
                    </Row>

                    {/*<Row form className="mx-4">*/}
                      {/*<Col md="6" className="form-group">*/}
                      {/*  <label htmlFor="userBio">Bio</label>*/}
                      {/*  <FormTextarea*/}
                      {/*    style={{ minHeight: "87px" }}*/}
                      {/*    id="userBio"*/}
                      {/*    value="I'm a design focused engineer."*/}
                      {/*    onChange={() => {}}*/}
                      {/*  />*/}
                      {/*</Col>*/}

                      {/*<Col md="6" className="form-group">*/}
                      {/*  <label htmlFor="userTags">Tags</label>*/}
                      {/*  <TagsInput*/}
                      {/*    value={this.state.tags}*/}
                      {/*    onChange={this.handleTagsChange}*/}
                      {/*  />*/}
                      {/*</Col>*/}
                    {/*</Row>*/}

                    <hr />

                    {/* Form Section Title :: Social Profiles */}
                    <FormSectionTitle
                      title="Financieel"
                      description="Beschrijving"
                    />

                    <Row form className="mx-4">
                      {/* Facebook */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialFacebook">Investeringskosten (CAPEX)</label>
                          <FormInput id="socialFacebook" onChange={() => {}} />
                      </Col>

                      {/* Twitter */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialTwitter">Opmerking</label>
                          <FormInput id="socialTwitter" onChange={() => {}} />
                      </Col>

                      {/* GitHub */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGitHub">Operationele kosten excl. personele inzet</label>
                          <FormInput id="socialGitHub" onChange={() => {}} />
                      </Col>

                      {/* Slack */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialSlack">Opmerking</label>
                          <FormInput id="socialSlack" onChange={() => {}} />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Jaarlijkse opbrengsten</label>
                          <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                          <FormInput
                            id="socialGooglePlus"
                            onChange={() => {}}
                          />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Personele inzet PWN (uur per jaar)</label>
                          <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                          <FormInput
                            id="socialGooglePlus"
                            onChange={() => {}}
                          />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Gemiddeld intern uurtarief</label>
                          <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                          <FormInput
                            id="socialGooglePlus"
                            onChange={() => {}}
                          />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Totale operationale kosten (OPEX)</label>
                          <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                          <FormInput
                            id="socialGooglePlus"
                            onChange={() => {}}
                          />
                      </Col>
                    </Row>

                    <hr />

                    {/* Form Section Title :: Social Profiles */}
                    <FormSectionTitle
                      title="Vermeden emissies"
                      description="Beschrijving"
                    />

                    <Row form className="mx-4">
                      {/* Facebook */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialFacebook">Energiedrager 1 (verschil per jaar)</label>
                        <FormInput id="socialFacebook" onChange={() => {}} />
                      </Col>

                      {/* Twitter */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialTwitter">Opmerking</label>
                        <FormInput id="socialTwitter" onChange={() => {}} />
                      </Col>

                      {/* GitHub */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGitHub">Emissiefactor Energiedrager 1</label>
                        <FormInput id="socialGitHub" onChange={() => {}} />
                      </Col>

                      {/* Slack */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialSlack">Opmerking</label>
                        <FormInput id="socialSlack" onChange={() => {}} />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Emissieverandering</label>
                        <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                        <FormInput
                          id="socialGooglePlus"
                          onChange={() => {}}
                        />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Energie-inhoud</label>
                        <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                        <FormInput
                          id="socialGooglePlus"
                          onChange={() => {}}
                        />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Energiereductie</label>
                        <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                        <FormInput
                          id="socialGooglePlus"
                          onChange={() => {}}
                        />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Kosten energiedrager</label>
                        <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                        <FormInput
                          id="socialGooglePlus"
                          onChange={() => {}}
                        />
                      </Col>

                      {/* Dribbble */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialDribbble">Kosten</label>
                        <FormInput id="socialDribbble" onChange={() => {}} />
                      </Col>

                      {/* Google Plus */}
                      <Col md="6" className="form-group">
                        <label htmlFor="socialGooglePlus">Opmerking</label>
                        <FormInput
                          id="socialGooglePlus"
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>

                    {/* Form Section Title :: Notifications */}
                    <FormSectionTitle
                      title="Notifications"
                      description="Setup which notifications would you like to receive."
                    />

                    {/* Notifications :: Conversations */}
                    <Row form className="mx-4">
                      <Col
                        tag="label"
                        htmlFor="conversationsEmailsToggle"
                        className="col-form-label"
                      >
                        Conversations
                        <small className="text-muted form-text">
                          Sends notification emails with updates for the
                          conversations you are participating in or if someone
                          mentions you.
                        </small>
                      </Col>
                      <Col className="d-flex">
                        <FormCheckbox
                          toggle
                          checked
                          className="ml-auto my-auto"
                          id="conversationsEmailsToggle"
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>

                    {/* Notifications :: New Projects */}
                    <Row form className="mx-4">
                      <Col
                        tag="label"
                        htmlFor="newProjectsEmailsToggle"
                        className="col-form-label"
                      >
                        New Projects
                        <small className="text-muted form-text">
                          Sends notification emails when you are invited to a
                          new project.
                        </small>
                      </Col>
                      <Col className="d-flex">
                        <FormCheckbox
                          toggle
                          className="ml-auto my-auto"
                          id="newProjectsEmailsToggle"
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>

                    {/* Notifications :: Vulnerabilities */}
                    <Row form className="mx-4">
                      <Col
                        tag="label"
                        htmlFor="conversationsEmailsToggle"
                        className="col-form-label"
                      >
                        Vulnerability Alerts
                        <small className="text-muted form-text">
                          Sends notification emails when everything goes down
                          and there's no hope left whatsoever.
                        </small>
                      </Col>
                      <Col className="d-flex">
                        <FormCheckbox
                          toggle
                          checked
                          className="ml-auto my-auto"
                          id="conversationsEmailsToggle"
                          onChange={() => {}}
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter className="border-top">
                  <Button
                    size="sm"
                    theme="accent"
                    className="ml-auto d-table mr-3"
                  >
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default EditUserProfile;
