package upb.pweb.warzonehelpapp.config.handler.resources;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class ApiErrorResponse {
    private Date timestamp;
    private Integer status;
    private String errorType;
    private String message;
}
