package upb.pweb.warzonehelpapp.controller.internal_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upb.pweb.warzonehelpapp.annotation.AuthorizedRoles;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewFundraisingCampaignRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.service.base.FundraisingCampaignService;

import javax.validation.Valid;

@RestController
@RequestMapping("/internal")
@Slf4j
@RequiredArgsConstructor
public class FundraisingCampaignsManagementController {
    private final FundraisingCampaignService fundraisingCampaignService;

    @AuthorizedRoles(roles = "ADMIN")
    @PostMapping("/new-fundraising-campaign")
    public ResponseEntity<?> newFundraisingCampaign(@RequestBody @Valid NewFundraisingCampaignRequest request) throws BaseException {
        BasicSuccessResponse response = fundraisingCampaignService.newFundraisingCampaign(request);

        return ResponseEntity.ok(response);
    }

    @AuthorizedRoles(roles = "ADMIN")
    @GetMapping("/fundraising-campaigns")
    public ResponseEntity<?> getAllFundraisingCampaigns() {
        return ResponseEntity.ok(fundraisingCampaignService.listAllFundraisingCampaigns());
    }
}
