package upb.pweb.warzonehelpapp.controller.public_api.resources;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class NewDonationRequest {
    @NotNull
    private Integer campaignId;

    @NotNull
    private String firstname;

    @NotNull
    private String lastname;

    @NotNull
    private String email;

    @NotNull
    private String cardCode;

    @NotNull
    private Integer donatedAmount;
}
