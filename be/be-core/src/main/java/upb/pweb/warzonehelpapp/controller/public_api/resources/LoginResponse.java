package upb.pweb.warzonehelpapp.controller.public_api.resources;

import lombok.Data;

@Data
public class LoginResponse {
    private String email;
    private String role;
}
