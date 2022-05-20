package upb.pweb.warzonehelpapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.warzonehelpapp.model.VolunteerRecruitmentCampaign;

@Repository
public interface VolunteerRecruitmentCampaignRepository extends JpaRepository<VolunteerRecruitmentCampaign, Integer> {
}
