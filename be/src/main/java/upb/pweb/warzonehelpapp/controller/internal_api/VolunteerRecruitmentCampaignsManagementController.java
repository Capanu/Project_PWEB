package upb.pweb.warzonehelpapp.controller.internal_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upb.pweb.warzonehelpapp.annotation.AuthorizedRoles;
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

    @AuthorizedRoles(roles = "ADMIN")
    @PostMapping("/new-volunteer-recruitment-campaign")
    public ResponseEntity<?> newVolunteerRecruitmentCampaign(@RequestHeader("X-Email") String email, @RequestBody @Valid NewVolunteerRecruitmentCampaignRequest request) throws BaseException {
        BasicSuccessResponse response = volunteerRecruitmentCampaignService.newVolunteerRecruitmentCampaign(request);

        return ResponseEntity.ok(response);
    }

    @AuthorizedRoles(roles = "VOLUNTEER")
    @PostMapping("/enroll")
    public ResponseEntity<?> enrollVolunteer(@RequestHeader("X-Email") String email, @RequestBody @Valid EnrollRequest request) throws BaseException {
        BasicSuccessResponse response = volunteerRecruitmentCampaignService.enrollVolunteer(email, request);

        return ResponseEntity.ok(response);
    }

    @AuthorizedRoles(roles = "VOLUNTEER")
    @GetMapping("/enrolled-campaigns")
    public ResponseEntity<?> getAllEnrolledCampaigns(@RequestHeader("X-Email") String email) throws BaseException {
        return ResponseEntity.ok(volunteerRecruitmentCampaignService.getEnrolledInCampaigns(email));
    }

    @AuthorizedRoles(roles = {"ADMIN", "VOLUNTEER"})
    @GetMapping("/volunteer-recruitment-campaigns")
    public ResponseEntity<?> getAllVolunteerRecruitmentCampaigns(@RequestHeader("X-Email") String email) throws BaseException {
        return ResponseEntity.ok(volunteerRecruitmentCampaignService.listAllVolunteerRecruitmentCampaigns(email));
    }
}
