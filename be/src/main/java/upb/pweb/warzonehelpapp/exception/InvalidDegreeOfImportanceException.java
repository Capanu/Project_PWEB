package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class InvalidDegreeOfImportanceException extends BaseException {
    public InvalidDegreeOfImportanceException(String degreeOfImportance) {
        super(HttpStatus.NOT_FOUND, "INVALID_ROLE", "The provided degree of importance: {} is not a valid degree of importance", degreeOfImportance);
    }
}
