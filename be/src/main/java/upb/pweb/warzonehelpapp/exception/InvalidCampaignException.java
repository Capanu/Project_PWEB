package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class InvalidCampaignException extends BaseException {
    public InvalidCampaignException(Integer id) {
        super(HttpStatus.NOT_FOUND, "INVALID_CAMPAIGN", "The provided campaign id:{} is not valid", id);
    }
}
