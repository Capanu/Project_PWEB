package upb.pweb.warzonehelpapp.controller.internal_api.resources;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class NewIssueRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;
}
