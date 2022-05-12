package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewVolunteerRecruitmentCampaignRequest;
import upb.pweb.warzonehelpapp.model.VolunteerRecruitmentCampaign;
import upb.pweb.warzonehelpapp.repository.VolunteerRecruitmentCampaignRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class VolunteerRecruitmentCampaignService {
    private final VolunteerRecruitmentCampaignRepository repository;

    public BasicSuccessResponse newVolunteerRecruitmentCampaign(NewVolunteerRecruitmentCampaignRequest request) {
        VolunteerRecruitmentCampaign volunteerRecruitmentCampaign = VolunteerRecruitmentCampaign.builder()
                .name(request.getName())
                .description(request.getDescription())
                .targetNumberOfVolunteers(request.getTargetNumberOfVolunteers())
                .build();

        repository.save(volunteerRecruitmentCampaign);

        return new BasicSuccessResponse();
    }
}
