import { AxiosResponse } from "axios";
import Badge from "types/entities/Badge";
import { apiGet } from "../index";

const badgesApi = {
  getBadges: (id: number | null): Promise<AxiosResponse<Badge[]>> =>
    apiGet(`users/${id}/badges`),
};

export default badgesApi;
