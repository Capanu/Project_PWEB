package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewFundraisingCampaignRequest;
import upb.pweb.warzonehelpapp.controller.public_api.resources.NewDonationRequest;
import upb.pweb.warzonehelpapp.exception.InvalidCampaignException;
import upb.pweb.warzonehelpapp.model.FundraisingCampaign;
import upb.pweb.warzonehelpapp.repository.FundraisingCampaignRepository;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class FundraisingCampaignService {
    private final FundraisingCampaignRepository repository;

    public BasicSuccessResponse newFundraisingCampaign(NewFundraisingCampaignRequest request) {
        FundraisingCampaign fundraisingCampaign = FundraisingCampaign.builder()
                .name(request.getName())
                .description(request.getDescription())
                .iban(request.getIban())
                .targetAmount(request.getTargetAmount())
                .currentAmount(0)
                .build();

        repository.save(fundraisingCampaign);

        return new BasicSuccessResponse();
    }

    public BasicSuccessResponse newDonation(NewDonationRequest request) throws InvalidCampaignException {
        FundraisingCampaign fundraisingCampaign = repository.findById(request.getCampaignId())
                .orElseThrow(() -> new InvalidCampaignException(request.getCampaignId()));

        fundraisingCampaign.setCurrentAmount(fundraisingCampaign.getCurrentAmount() + request.getDonatedAmount());

        //TODO: Maybe keep evidence of the people that are making donations

        return new BasicSuccessResponse("Thanks for taking your time to donate for such a noble cause!");
    }

    public List<FundraisingCampaign> listAllFundraisingCampaigns() {
        return repository.findAll();
    }
}
