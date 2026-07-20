/**
 * Stadtbibliothek – Mitgliederdaten
 *
 * Musterlösung
 */
export function memberDisplayName(member) {
    const name = `${member.firstName} ${member.lastName}`;
    return member.email ? `${name} <${member.email}>` : name;
}
export function canBorrow(member) {
    return member.active;
}
const member = {
    memberNumber: 1042,
    firstName: "Mia",
    lastName: "Sommer",
    email: "mia@example.org",
    active: true,
};
console.log(memberDisplayName(member) === "Mia Sommer <mia@example.org>");
console.log(canBorrow(member) === true);
