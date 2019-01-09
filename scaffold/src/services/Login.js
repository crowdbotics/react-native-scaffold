import Utils from '../utils';
import APIClient from '../utils/api';
import APIConstants from '../utils/api/constants';


const loginAPI = (username, password) => {
  const url = `${Utils.serverUrl}/`;
  const params = {
    username,
    password,
  };

  const client = new APIClient(url, APIConstants.HTTPMethod.POST);

  return client.sendRequest(params);
};

export default loginAPI;
