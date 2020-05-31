/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /users': 'users/find-users',
  'GET /users/:userId': 'users/find-user',
  'POST /users': 'users/create-user',

  'GET /users/:userId/conversations': 'users/conversations/find-conversations',
  'GET /users/:userId/conversations/:conversationId': 'users/conversations/find-conversation',
  'POST /users/:userId/conversations': 'users/conversations/create-conversation',

  'GET /users/:userId/conversations/:conversationId/messages': 'users/conversations/messages/find-msgs',
  'GET /users/:userId/conversations/:conversationId/messages/:messageId': 'users/conversations/messages/find-msg',
  'POST /users/:userId/conversations/:conversationId/messages': 'users/conversations/messages/create-msg',

  'POST /auth/login': 'authentication/log-in',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
