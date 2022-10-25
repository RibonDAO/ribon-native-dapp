import { useCurrentUser } from "../../../contexts/currentUserContext";
import { useApi } from "hooks/useApi";
import badgesApi from "services/api/badgesApi";
import Badge from "types/entities/Badge";

function useImpact() {
  const { currentUser } = useCurrentUser();
  const { data: userBadges } = useApi<Badge[]>({
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
