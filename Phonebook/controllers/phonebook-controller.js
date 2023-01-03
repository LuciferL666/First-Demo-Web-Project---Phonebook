const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getContacts();
    console.log(contacts);
    res.render('index', { contacts });

  },
  addPhonebookPost:(req, res) => {
    // Get input from client
    let name = req.body.name;
    let number = req.body.number;

    // Create model
    const contact = new Contact(name, number);

    //Push model to 'db'
    phonebook.addContact(contact)


  

    // redirect to home page
    res.redirect('/');
    // TODO: add a phonebook object to the array
  }
}