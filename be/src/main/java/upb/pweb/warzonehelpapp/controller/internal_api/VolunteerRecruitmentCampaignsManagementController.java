package upb.pweb.warzonehelpapp.controller.internal_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.EnrollRequest;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewVolunteerRecruitmentCampaignRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.service.base.VolunteerRecruitmentCampaignService;

import javax.validation.Valid;

@RestController
@RequestMapping("/internal")
@Slf4j
@RequiredArgsConstructor
public class VolunteerRecruitmentCampaignsManagementController {
    private final VolunteerRecruitmentCampaignService volunteerRecruitmentCampaignService;

    @PostMapping("/new-volunteer-recruitment-campaign")
    public ResponseEntity<?> newVolunteerRecruitmentCampaign(@RequestBody @Valid NewVolunteerRecruitmentCampaignRequest request) throws BaseException {
        BasicSuccessResponse response = volunteerRecruitmentCampaignService.newVolunteerRecruitmentCampaign(request);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/enroll")
    public ResponseEntity<?> enrollVolunteer(@RequestHeader("X-Email") String email, @RequestBody @Valid EnrollRequest request) throws BaseException {
        BasicSuccessResponse response = volunteerRecruitmentCampaignService.enrollVolunteer(email, request);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/enrolled-campaigns")
    public ResponseEntity<?> getAllEnrolledCampaigns(@RequestHeader("X-Email") String email) throws BaseException {
        return ResponseEntity.ok(volunteerRecruitmentCampaignService.getEnrolledInCampaigns(email));
    }

    @GetMapping("/volunteer-recruitment-campaigns")
    public ResponseEntity<?> getAllVolunteerRecruitmentCampaigns() {
        return ResponseEntity.ok(volunteerRecruitmentCampaignService.listAllVolunteerRecruitmentCampaigns());
    }
}
