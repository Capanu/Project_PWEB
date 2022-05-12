package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewFundraisingCampaignRequest;
import upb.pweb.warzonehelpapp.model.FundraisingCampaign;
import upb.pweb.warzonehelpapp.repository.FundraisingCampaignRepository;

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
                .build();

        repository.save(fundraisingCampaign);

        return new BasicSuccessResponse();
    }
}
