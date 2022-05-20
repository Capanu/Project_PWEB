package upb.pweb.warzonehelpapp.config.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import upb.pweb.warzonehelpapp.config.handler.resources.ApiErrorResponse;
import upb.pweb.warzonehelpapp.exception.BaseException;

import java.util.Date;
import java.util.Objects;

@RestControllerAdvice
@Slf4j
public class ApiErrorHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {
        log.error("MethodArgumentNotValidException");
        HttpStatus status = HttpStatus.BAD_REQUEST;

        return new ResponseEntity<>(
                ApiErrorResponse.builder()
                        .timestamp(new Date())
                        .status(status.value())
                        .errorType("MethodArgumentNotValidException")
                        .message(Objects.requireNonNull(ex.getFieldError()).getDefaultMessage())
                        .build(),
                status);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleInternalServerErrorException(Exception ex) {
        log.error("Exception");
        HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;

        ex.printStackTrace();

        return new ResponseEntity<>(
                ApiErrorResponse.builder()
                        .timestamp(new Date())
                        .status(status.value())
                        .errorType("INTERNAL_SERVER_ERROR")
                        .message(ex.getMessage())
                        .build(),
                status);
    }

    @ExceptionHandler(ServletRequestBindingException.class)
    public ResponseEntity<?> handleServletRequestBindingException(ServletRequestBindingException ex) {
        log.error("ServletRequestBindingException");
        HttpStatus status = HttpStatus.BAD_REQUEST;

        return new ResponseEntity<>(
                ApiErrorResponse.builder()
                        .timestamp(new Date())
                        .status(status.value())
                        .errorType("MISSING_HEADER")
                        .message(ex.getMessage())
                        .build(),
                status);
    }

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<?> handleBaseException(BaseException ex) {
        log.error("BaseException");

        return new ResponseEntity<>(
                ApiErrorResponse.builder()
                        .timestamp(new Date())
                        .status(ex.getHttpStatus().value())
                        .errorType(ex.getErrorType())
                        .message(ex.getMessage())
                        .build(),
                ex.getHttpStatus());
    }
}
