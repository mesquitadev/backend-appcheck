'use strict'
const env = use('Env')
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Env = use('Env')
const Event = use('Event')

Route.get('/', ({ response }) => {
  return response.redirect('/api/v1')
})
Route.group(() => {
  Route.get('/', () => {
    return {
      success: `Server running on ${Env.get('HOST')} in port: ${Env.get('PORT')}`
    }
  })

  Route.resource('users', 'UserController')
  Route.post('login', 'SessionController.store')
  Route.resource('locale', 'LocaleController')
  Route.resource('quest', 'QuestController')
  Route.resource('ask', 'AskController')
  // Route.post('visitante/validate', 'Ambient//ValidateController.store')
  // Route.get('visitante/validate/:token', 'Ambient//ValidateController.index')
}).prefix('api/v1')
