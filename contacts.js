const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

async function addContact(name, email, phone) {
  // ...твой код
}

async function removeContact(contactId) {
  // ...твой код
}
module.exports = { listContacts, getContactById, removeContact, addContact };
