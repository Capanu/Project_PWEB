package upb.pweb.warzonehelpapp.exception;

import lombok.Getter;
import lombok.ToString;
import org.slf4j.helpers.MessageFormatter;
import org.springframework.http.HttpStatus;

@Getter
@ToString
public class BaseException extends Exception {
    private final HttpStatus httpStatus;
    private final String errorType;

    public BaseException(HttpStatus httpStatus, String errorType, String format, Object... args) {
        super(MessageFormatter.arrayFormat(format, args).getMessage());
        this.httpStatus = httpStatus;
        this.errorType = errorType;
    }
}
