package upb.pweb.warzonehelpapp.controller.internal_api.resources;

import lombok.Data;

@Data
public class BasicSuccessResponse {
    private String message;

    public BasicSuccessResponse(String message) {
        this.message = message;
    }

    public BasicSuccessResponse() {
        this("Operation successful");
    }
}
