package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class InvalidPasswordException extends BaseException {
    public InvalidPasswordException(String email) {
        super(HttpStatus.FORBIDDEN, "INVALID_PASSWORD", "The provided password is incorrect for {}", email);
    }
}
