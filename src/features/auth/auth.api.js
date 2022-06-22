import {axiosRequest, axiosMethod} from '@myapp/utils/api.util';
import {API} from '@env'

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
}

export default new AuthenApi();
