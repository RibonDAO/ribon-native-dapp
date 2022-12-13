import { useCurrentUser } from "../../../contexts/currentUserContext";
import { useApi } from "hooks/useApi";
import badgesApi from "services/api/badgesApi";

function useImpact() {
  const { currentUser } = useCurrentUser();
  const { data: userBadges } = useApi<any[]>({
    key: "badges",
    fetchMethod: () => {
      const id = currentUser?.id || null;
      return badgesApi.getBadges(id);
    },
    options: {
      enabled: !!currentUser?.id,
    },
  });

  return {
    userBadges,
  };
}

export default useImpact;
