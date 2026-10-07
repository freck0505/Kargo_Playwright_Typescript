export const homePageLocators = {
    userNameField: {
        role: "textbox" as const,
        text: {name: "Login ID"}
    },

    userPasswordField: {
        role: "textbox" as const,
        text: {name:"Password"}
    },

    loginButton: {
        role: "button" as const,
        text: {name:"Login", exact: true}
    },

    notificationsHeading: {
        role: "heading" as const,
        text: {name: "Notifications"}
    }
       
}