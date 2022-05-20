package upb.pweb.warzonehelpapp.annotation;

import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.TYPE})
@Inherited
@Documented
public @interface AuthorizedRoles {
    String[] roles() default "";
}
