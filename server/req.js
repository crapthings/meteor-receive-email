Mails.remove({})

Meteor.methods({
  'inbox:create' (opt) {
    opt = parse(opt[0])
    _.each(opt.to, t => {
      const data = {
        from: opt.from[0].address,
        to: t.address,
        subject: opt.subject,
        text: opt.text,
      }
      Mails.insert(data)
    })
  }
})

Meteor.methods({
  'inbox:empty' (opt) {
    Mails.remove({})
  }
})

function pretty (opt) {
  return JSON.stringify(opt, null, 4)
}

function parse (opt) {
  return JSON.parse(opt)
}
