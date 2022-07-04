import {axiosRequest} from '@myapp/utils/api.util';
import {API} from '@env';

const NOTIFICATION_TYPE = {
  APARTMENT: 1,
  GENERAL: 2,
};

class NotiApi {
  constructor() {
    this.endpoint = `${API}`;
  }
  async getGeneralNotiApi() {
    let url =
      this.endpoint +
      '/api/services/app/UserCityNotification/GetAllNotificationUserTenant';
    const response = await axiosRequest({
      url,
      params: {
        type: NOTIFICATION_TYPE.GENERAL,
      },
    });

    return response.result.data;
  }

  async getApartmentNotiApi() {
    let url =
      this.endpoint +
      '/api/services/app/UserCityNotification/GetAllNotificationUserTenant';
    const response = await axiosRequest({
      url,
      params: {
        type: NOTIFICATION_TYPE.APARTMENT,
      },
    });

    return response.result.data;
  }

  async getAllCommentNotiApi(notiId) {
    let url =
      this.endpoint +
      '/api/services/app/UserCityNotification/GetAllComment';
    const response = await axiosRequest({
      url,
      params: {
        NotifiactionId: notiId,
      },
    });

    return response.result.data;
  }
}

export default new NotiApi();