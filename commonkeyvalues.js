function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
const newEvent = {
    username: "vkrauss",
    displayName: "Veronica Krauss",
};
const friendName = getFriendNameFromEvent(newEvent);
console.log(`You have an update from ${friendName}.`);
