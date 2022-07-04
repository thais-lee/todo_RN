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
        // token: accessToken,
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEwMTE2IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6InRoYWliaCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRoYWliaEBnbWFpbC5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IkFEU0RaMzdBT0NWRUxWRE9USlNDTENaSFJLWVhVNEdBIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiRGVmYXVsdFVzZXIiLCJzdWIiOiIxMDExNiIsImp0aSI6ImZhNGZmZWZiLTljOTEtNGVkNS1hMzQ3LWQ0NWViMzU3ZjczNCIsImlhdCI6MTY1Njg5NzM0NCwibmJmIjoxNjU2ODk3MzQ0LCJleHAiOjE2NTY5ODM3NDQsImlzcyI6Ik1IUFEiLCJhdWQiOiJNSFBRIn0.k5oc8j2RY5mTmMCGJvmr7QD5_TtEZlFwfdtlLEGkBEA',
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
