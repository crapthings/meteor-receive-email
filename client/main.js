defaultOption = {
  sort: {
    createdAt: -1
  }
}

Template.registerHelper('mails', () => Mails.find({}, defaultOption))

Template.sender.helpers({
  subject () {
    return faker.lorem.sentence()
  },

  text () {
    return faker.lorem.paragraph()
  }
})

Template.sender.events({
  'submit form' (e) {
    e.preventDefault()
    const form = e.currentTarget
    const opt = {}
    _.each(form, input => {
      if (input.type !== 'submit') {
        opt[input.name] = input.value
      }
    })
    Meteor.call('mail:send', opt, err => {
      !err && form.reset()
      form[2].value = faker.lorem.sentence()
      form[3].value = faker.lorem.paragraph()
    })
  }
})
