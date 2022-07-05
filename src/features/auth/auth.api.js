import {axiosRequest, axiosMethod} from '@myapp/utils/api.util';
import {API} from '@env';

class AuthenApi {
  async loginApi({userEmail, userPassword}) {
    const url = `${API}/api/TokenAuth/Authenticate`;
    const data = {
      userNameOrEmailAddress: userEmail,
      password: userPassword,
      rememberClient: true,
    };
    console.log('login');
    const res = await axiosRequest({
      url,
      method: axiosMethod.POST,
      data,
    });
    return {accessToken: res.result.accessToken};
  }

  async registerApi({
    name,
    surname,
    userName,
    emailAddress,
    password,
    phoneNumber,
    address,
    gender,
    dateOfBirth,
  }) {
    const url = `${API}/api/services/app/Account/Register`;
    const data = {
      name,
      surname,
      userName,
      emailAddress,
      password,
      phoneNumber,
      address,
      gender,
      dateOfBirth,
    };
    console.log(data);
    try {
      const res = await axiosRequest({
        url,
        method: axiosMethod.POST,
        data,
      });

      console.log('canlogin', {canLogin: res.result.canLogin});
      return {canLogin: res.result.canLogin};
    } catch (error) {
      console.log(error?.res.data);
    }
  }

  async getMeApi(accessToken) {
    const url = `${API}/api/services/app/User/GetDetail`;
    try {
      const res = await axiosRequest({
        token: accessToken,
        url,
        method: axiosMethod.GET,
      });
      return res?.result;
    } catch (error) {
      console.log(error?.response.data);
    }
  }
}

export default new AuthenApi();
