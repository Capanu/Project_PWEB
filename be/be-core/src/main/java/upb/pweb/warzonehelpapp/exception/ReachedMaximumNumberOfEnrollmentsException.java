package upb.pweb.warzonehelpapp.exception;

import org.springframework.http.HttpStatus;

public class ReachedMaximumNumberOfEnrollmentsException extends BaseException {
    public ReachedMaximumNumberOfEnrollmentsException() {
        super(HttpStatus.FORBIDDEN, "MAXIMUM_NUMBER_OF_ENROLLMENTS_REACHED", "You are already enrolled in 3 volunteer campaigns");
    }
}
