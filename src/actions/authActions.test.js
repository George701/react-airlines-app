import { getAuthenticated, getCredentials} from './authActions';
import { GET_AUTH, GET_CREDENTIALS } from './types';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('authentication actions', () => {
    afterEach(() => {
        fetchMock.restore()
      })

    it('getAuthenticated', () => {

        const user = "dev";
        const pass = "sf*&4okgrf&^regrfskl";

        const body = {
            "Code": "BRIGHT",
            "User": user,
            "Password": pass
        };

        fetchMock.getOnce('/https://dev-api.blue-style.cz/account/v1/token', {
            body: body,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = { 
            type: GET_AUTH, body: body }
          
          const store = mockStore({ auth: [] })
      
          return store.dispatch(getAuthenticated(user, pass)).then(() => {
            // return of async actions
            expect(getAuthenticated(user, pass)).toEqual(expectedActions)
          })
    })
})