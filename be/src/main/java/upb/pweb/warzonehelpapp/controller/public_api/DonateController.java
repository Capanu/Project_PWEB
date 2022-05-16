package upb.pweb.warzonehelpapp.controller.public_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.public_api.resources.NewDonationRequest;
import upb.pweb.warzonehelpapp.exception.InvalidCampaignException;
import upb.pweb.warzonehelpapp.service.EmailSenderService;
import upb.pweb.warzonehelpapp.service.base.FundraisingCampaignService;

import javax.validation.Valid;

@RestController
@RequestMapping("/public")
@Slf4j
@RequiredArgsConstructor
public class DonateController {
    private final FundraisingCampaignService fundraisingCampaignService;

    private final EmailSenderService service;

    @PostMapping("/new-donation")
    public ResponseEntity<?> newDonation(@RequestBody @Valid NewDonationRequest request) throws InvalidCampaignException {
        BasicSuccessResponse response = fundraisingCampaignService.newDonation(request);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/fundraising-campaigns")
    public ResponseEntity<?> getAllFundraisingCampaigns() {
        return ResponseEntity.ok(fundraisingCampaignService.listAllFundraisingCampaigns());
    }
}
