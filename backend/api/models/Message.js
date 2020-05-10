/**
 * Message.js
 * 
 * A message that has been sent by any user.
 */
module.exports = {
  attributes: {
    content: {
      type: 'string', 
      required: true,
    },
    senderId: {
      type: 'number',
      required: true,
      description: 'This field contains an id of a user who sent the message.'
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    
    conversation: {
      model: 'conversation',
    },
  }
}