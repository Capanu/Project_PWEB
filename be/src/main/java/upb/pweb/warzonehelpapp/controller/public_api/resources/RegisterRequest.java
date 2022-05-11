package upb.pweb.warzonehelpapp.controller.public_api.resources;

import lombok.Data;
import upb.pweb.warzonehelpapp.annotation.ValidPassword;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public class RegisterRequest {
    @Email
    @NotBlank
    private String email;

    @ValidPassword
    private String password;

    @NotBlank
    private String role;
}
