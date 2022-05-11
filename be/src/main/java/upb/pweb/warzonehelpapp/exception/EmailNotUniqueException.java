package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class EmailNotUniqueException extends BaseException {
    public EmailNotUniqueException(String email) {
        super(HttpStatus.CONFLICT, "EMAIL_NOT_UNIQUE", "The provided email:{} is already in use", email);
    }
}