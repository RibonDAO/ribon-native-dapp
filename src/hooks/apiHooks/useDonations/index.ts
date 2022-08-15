import donationsApi from "services/api/donationsApi";

function useDonations() {
  async function donate(
    integrationId: number,
    nonProfitId: number,
    email: string,
  ) {
    // console.log(integrationId, nonProfitId, email, donationsApi.postDonation);
    await donationsApi.postDonation(integrationId, nonProfitId, email);
  }

  return {
    donate,
  };
}

export default useDonations;
