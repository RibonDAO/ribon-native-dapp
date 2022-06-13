import { AxiosResponse } from "axios";
import NonProfit from "types/entities/NonProfit";
import { apiGet } from "services/api";

const nonProfitsApi = {
  getNonProfits: (): Promise<AxiosResponse<NonProfit[]>> =>
    apiGet("non_profits"),
};

export default nonProfitsApi;
