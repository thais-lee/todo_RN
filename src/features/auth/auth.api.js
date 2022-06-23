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
    dateOfbirth,
  }) {
    const url = ``;
    const data = {
      name,
      surname,
      userName,
      emailAddress,
      password,
      phoneNumber,
      address,
      gender,
      dateOfbirth,
    };

    const res = await axiosRequest({
      url,
      method: axiosMethod.POST,
      data,
    });

    return res.result;
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
