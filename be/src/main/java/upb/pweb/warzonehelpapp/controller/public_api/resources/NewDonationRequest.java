package upb.pweb.warzonehelpapp.controller.public_api.resources;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class NewDonationRequest {
    @NotNull
    private Integer campaignId;

    @NotNull
    private Integer donatedAmount;
}
