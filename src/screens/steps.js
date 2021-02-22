import { Step } from "../components/";

export const dashboard_steps = [
    {
        selector: ".first-step",
        content: (
            <Step
                heading="Welcome"
                body={[
                    `Welcome to Paperwork CRM. Let's give you a quick tour of the
        environment!`,
                ]}
            />
        ),
    },
    {
        selector: ".dashboard-div",
        content: (
            <Step
                heading="Dashboard"
                body={[
                    `Here's your dashboard. We catch you up on all the action here.`,
                ]}
            />
        ),
        // position: [1210, 420],
        position: [650, 13],
    },
    {
        selector: ".nav-bar",
        content: (
            <Step
                heading="Navigation"
                body={[
                    `This is your navigation menu, from which you can switch views.`,
                    `Click the 'Contacts' icon (the little address book) to go to your contacts view.`,
                ]}
            />
        ),
        stepInteraction: true,
    },
];

export const contacts_steps = [
    {
        selector: "",
        content: (
            <Step
                heading="Contacts"
                body={[
                    `Good! You manage your contacts here. Let's add your first contact!.`,
                ]}
            />
        ),
    },
];
