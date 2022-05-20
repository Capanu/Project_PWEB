package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class UserNotFoundException extends BaseException {
    public UserNotFoundException(String email) {
        super(HttpStatus.NOT_FOUND, "USER_NOT_FOUND", "User with email {} does not exist", email);
    }
}
