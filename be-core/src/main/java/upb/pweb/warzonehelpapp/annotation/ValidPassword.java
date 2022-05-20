package upb.pweb.warzonehelpapp.annotation;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.lang.annotation.Documented;
import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Documented
@Constraint(validatedBy = {})
@Target({METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER, TYPE_USE})
@Retention(RUNTIME)
@NotBlank
@Size(min = 8, max = 15, message = "Password must have between 8 and 15 characters.")
@Pattern(regexp = "(.*[A-Z].*)", message = "Password must have at least one upper case letter.")
@Pattern(regexp = "(.*[a-z].*)", message = "Password must have at least one lower case letter.")
@Pattern(regexp = "(.*[0-9].*)", message = "Password must have at least one number.")
@Pattern(regexp = "(.*[#?!@$%^&*-].*)", message = "Password must have at least one special character.")
@Repeatable(ValidPassword.List.class)
public @interface ValidPassword {
    String message() default "{javax.validation.constraints.ValidPassword.message}";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    @Target({METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER, TYPE_USE})
    @Retention(RUNTIME)
    @Documented
    @interface List {
        ValidPassword[] value();
    }
}
