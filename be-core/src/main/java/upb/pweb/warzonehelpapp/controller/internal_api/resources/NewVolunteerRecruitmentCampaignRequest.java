package upb.pweb.warzonehelpapp.controller.internal_api.resources;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class NewVolunteerRecruitmentCampaignRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotNull
    @Min(value = 1)
    private Integer targetNumberOfVolunteers;
}
