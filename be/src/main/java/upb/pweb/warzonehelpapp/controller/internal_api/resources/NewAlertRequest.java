package upb.pweb.warzonehelpapp.controller.internal_api.resources;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class NewAlertRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private String degreeOfImportance;

    @NotNull
    @JsonFormat(shape= JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date occurrenceDate;
}
