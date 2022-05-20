package upb.pweb.warzonehelpapp.controller.internal_api.resources;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class EnrollRequest {
    @NotNull
    private Integer campaignId;
}
