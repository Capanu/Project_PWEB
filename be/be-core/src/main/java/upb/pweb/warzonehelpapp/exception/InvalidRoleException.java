package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class InvalidRoleException extends BaseException {
    public InvalidRoleException(String role) {
        super(HttpStatus.NOT_FOUND, "INVALID_ROLE", "The provided user role: {} is not a valid role", role);
    }
}