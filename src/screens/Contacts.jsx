import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tour from "reactour";
import GoogleContacts from "react-google-contacts";

import { PersonAddOutline } from "@styled-icons/evaicons-outline/PersonAddOutline";

import { Header, ContactsTable, EmptyState, SidePullUp } from "../components/";

import { contacts_steps } from "./steps";

import "./styles/Contacts.css";

import {
    isContactsTourOpen,
    setIsContactsTourOpen,
} from "../features/app/appSlice";

import { clients } from "../data/constants";

function TourComponent() {
    const contactsTourState = useSelector(isContactsTourOpen);
    const dispatch = useDispatch();

    return (
        <Tour
            steps={contacts_steps}
            isOpen={contactsTourState}
            accentColor="#0e9168"
            // showCloseButton={false}
            rounded={8}
            closeWithMask={false}
            nextButton={
                <button type="button" className="btn btn-primary">
                    Next step
                </button>
            }
            lastStepNextButton={
                <button type="button" className="btn btn-primary">
                    Done!
                </button>
            }
            onRequestClose={() => dispatch(setIsContactsTourOpen())}
        />
    );
}

class Contacts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vcfContent: "",
            theInputKey: "",

            // allClients: clients,
            allClients: [],
            itemsCount: clients.length,
            currentPage: 1,
            pageLimit: 10,
            totalPages: null,

            // form
            firstName: "",
            lastName: "",
            phone: "",
        };

        this.handleChangeTextInput = this.handleChangeTextInput.bind(this);
        this.handleAddContactByText = this.handleAddContactByText.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleLoadFile = this.handleLoadFile.bind(this);
        this.responseCallback = this.responseCallback.bind(this);
    }

    handleChangeTextInput(evt) {
        // console.log(event);
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    }

    handleAddContactByText(evt) {
        evt.preventDefault();

        if (
            this.state.firstName !== "" &&
            this.state.lastName !== "" &&
            this.state.phone !== ""
        ) {
            let line = {};

            line["name"] = this.state.firstName + " " + this.state.lastName;
            line["phone"] = this.state.phone;
            line["created"] = new Date().toLocaleDateString("en-GB");

            let clients = [...this.state.allClients];
            let combined_clients = clients.concat(line);

            this.setState({
                allClients: combined_clients,
                itemsCount: combined_clients.length,
            });

            this.setState({
                firstName: "",
                lastName: "",
                phone: "",
            });
        }
    }

    handleFile(evt) {
        evt.preventDefault();

        let result = this.state.vcfContent;

        result = result.toLowerCase();
        result = result.split("\n");

        // arr_length = result.split("\n").length

        let contacts_list = [];

        for (let idx in result) {
            let text = result[idx];

            if (text.includes("fn:")) {
                text = text.replace("\n", "");
                contacts_list = contacts_list.concat(text);
            }

            if (text.includes("tel")) {
                contacts_list = contacts_list.concat(text);
            }
        }

        let contacts_pair_list = [];
        let line = {};

        for (let idx in contacts_list) {
            let text = contacts_list[idx];

            if (text.includes("fn:")) {
                text = text.replace("fn:", "").replace("\n", "");
                line["name"] = text;
            } else {
                text = text
                    .replace("tel:", "")
                    .replace("tel;", "")
                    .replace("cell:", "")
                    .replace("cell;", "")
                    .replace("pref:", "")
                    .replace(":", "");
                line["phone"] = text;
            }

            if (Object.keys(line).length === 2) {
                line["created"] = new Date().toLocaleDateString("en-GB");
                contacts_pair_list.push(line);
                line = {};
            }
        }

        let clients = [...this.state.allClients];
        let combined_clients = clients.concat(contacts_pair_list);

        console.log(combined_clients);

        this.setState({
            allClients: combined_clients,
            itemsCount: combined_clients.length,
        });

        this.setState({ vcfContent: "" });
        this.resetFileInput();
    }

    resetFileInput() {
        let randomString = Math.random().toString(36);

        this.setState({
            theInputKey: randomString,
        });
    }

    handleLoadFile(e) {
        let fr = new FileReader();

        // setContacts("please wait...");

        fr.onload = () => {
            this.setState({ vcfContent: fr.result });
        };

        if (!e.target.files[0]["name"].toLowerCase().includes("vcf")) {
            // setContacts("Please upload a valid .VCF file.");
            return;
        }

        fr.readAsText(e.target.files[0]);
    }

    responseCallback = (response) => {};

    render() {
        const {
            pageLimit,
            allClients,
            firstName,
            lastName,
            phone,
        } = this.state;

        const {
            handleFile,
            handleLoadFile,
            handleChangeTextInput,
            handleAddContactByText,
            responseCallback,
        } = this;

        // let clients = paginate(allClients, currentPage, pageSize);

        return (
            <>
                <div className="contacts-container-div">
                    <Header heading="Clients">
                        <button
                            type="button"
                            className={
                                allClients.length > 0
                                    ? "btn btn-primary"
                                    : "btn btn-primary hidden"
                            }
                            data-trigger="#side-menu"
                            style={{
                                position: "absolute",
                                top: "90px",
                                right: 0,
                            }}
                        >
                            + Add Contacts
                        </button>
                    </Header>

                    {allClients.length > 0 && (
                        <ContactsTable
                            pageLimit={pageLimit}
                            allClients={allClients}
                        />
                    )}
                    <>
                        {allClients.length === 0 && (
                            <EmptyState
                                heading="You have no contacts yet"
                                headingIcon={
                                    <PersonAddOutline
                                        size={48}
                                        color="#DDDDDD"
                                    />
                                }
                            >
                                <p>
                                    Let's help you begin organizing your
                                    clientele. Click the button below to get
                                    started.
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-trigger="#side-menu"
                                >
                                    Add Contacts
                                </button>
                            </EmptyState>
                        )}
                        <TourComponent />
                    </>
                </div>

                <SidePullUp
                    heading="Add Clients"
                    infoParagraph="Bring your contacts here by importing, inputing or
                            syncing."
                >
                    <div className="accordion" id="accordionExample">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <button
                                    className="btn btn-link btn-block text-left"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <h4>Import .VCF file</h4>
                                    <p className="top-side-p">
                                        Import your contacts from your business
                                        phone and keep working from here.
                                    </p>
                                </button>
                            </div>

                            <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                            >
                                <div className="card-body">
                                    <div
                                        className="alert alert-info fade show"
                                        role="alert"
                                        style={{ fontSize: "0.975em" }}
                                    >
                                        <p>
                                            On{" "}
                                            <strong
                                                style={{
                                                    fontFamily:
                                                        "IBM_Plex_Sans_SemiBold",
                                                }}
                                            >
                                                Android:
                                            </strong>
                                        </p>
                                        <ol style={{ marginBottom: 5 }}>
                                            <li>
                                                Open <em>Contacts.</em>
                                            </li>
                                            <li>
                                                Tap Menu &gt; Settings &gt;
                                                Export.
                                            </li>
                                            <li>
                                                <ol>
                                                    <li>
                                                        Choose one or more
                                                        accounts to export
                                                        contacts from.
                                                    </li>
                                                    <li>
                                                        Or simply tap Export to
                                                        .vcf file
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>Tap Export to .VCF file.</li>
                                        </ol>
                                        <br />
                                        <p>
                                            On{" "}
                                            <strong
                                                style={{
                                                    fontFamily:
                                                        "IBM_Plex_Sans_SemiBold",
                                                }}
                                            >
                                                iOS:
                                            </strong>
                                        </p>
                                        <ol style={{ marginBottom: 5 }}>
                                            <li>
                                                Open <em>Contacts.</em>
                                            </li>
                                            <li>
                                                Tap Menu &gt; Settings &gt;
                                                Export.
                                            </li>
                                            <li>
                                                <ol>
                                                    <li>
                                                        Choose one or more
                                                        accounts to export
                                                        contacts from.
                                                    </li>
                                                    <li>
                                                        Or simply tap Export to
                                                        .vcf file
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>Tap Export to .VCF file.</li>
                                        </ol>
                                    </div>

                                    <form onSubmit={handleFile}>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input
                                                    type="file"
                                                    name="inputfile"
                                                    className="inputfile"
                                                    id="inputfile"
                                                    onChange={(e) => {
                                                        handleLoadFile(e);
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    key={
                                                        this.state
                                                            .theInputKey || ""
                                                    }
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    class="btn btn-primary"
                                                    type="submit"
                                                >
                                                    Upload
                                                </button>
                                            </div>
                                        </div>
                                        {/* <input
                                            type="file"
                                            name="inputfile"
                                            className="inputfile"
                                            id="inputfile"
                                            onChange={(e) => {
                                                handleLoadFile(e);
                                            }}
                                            style={{ cursor: "pointer" }}
                                            key={this.state.theInputKey || ""}
                                        /> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <button
                                    className="btn btn-link btn-block text-left collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <h4>Input by Text</h4>
                                    <p className="top-side-p">
                                        Enter in a contact's details here.
                                    </p>
                                </button>
                            </div>
                            <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                            >
                                <div
                                    className="card-body"
                                    style={{
                                        position: "relative",
                                        minHeight: "220px",
                                    }}
                                >
                                    <form onSubmit={handleAddContactByText}>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon2"
                                                >
                                                    First Name
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. Hassan"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="firstName"
                                                value={firstName}
                                                onChange={handleChangeTextInput}
                                            />
                                        </div>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon2"
                                                >
                                                    Last Name
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. Okafor"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="lastName"
                                                value={lastName}
                                                onChange={handleChangeTextInput}
                                            />
                                        </div>
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span
                                                    className="input-group-text"
                                                    id="basic-addon2"
                                                >
                                                    Phone
                                                </span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="e.g. 08012345678"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                name="phone"
                                                value={phone}
                                                onChange={handleChangeTextInput}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{
                                                position: "absolute",
                                                right: 0,
                                            }}
                                        >
                                            Add this contact
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <button
                                    className="btn btn-link btn-block text-left collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <h4>Google Sync Contacts</h4>
                                    <p className="top-side-p">
                                        Import your Gmail contacts.
                                    </p>
                                </button>
                            </div>
                            <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                            >
                                <div className="card-body">
                                    <GoogleContacts
                                        clientId="429632624144-40js6mbas4r3tmjursoco68eoum0a24v.apps.googleusercontent.com"
                                        buttonText="Import Contacts from Gmail"
                                        onSuccess={responseCallback}
                                        onFailure={responseCallback}
                                        style={{ color: "#4285F4", width: 900 }}
                                        className="google-button"
                                    >
                                        <span
                                            style={{
                                                // backgroundColor: "blue",
                                                display: "inline-block",
                                                color: "#181818",
                                                fontSize: "1rem",
                                                fontFamily: "IBM_Plex_Sans",
                                                paddingTop: 2,
                                            }}
                                        >
                                            Import Contacts from Gmail
                                        </span>
                                    </GoogleContacts>
                                </div>
                            </div>
                        </div>
                    </div>
                </SidePullUp>
            </>
        );
    }
}

export default Contacts;
