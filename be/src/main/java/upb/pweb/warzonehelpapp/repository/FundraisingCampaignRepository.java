package upb.pweb.warzonehelpapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.warzonehelpapp.model.FundraisingCampaign;

@Repository
public interface FundraisingCampaignRepository extends JpaRepository<FundraisingCampaign, Integer> {
}
