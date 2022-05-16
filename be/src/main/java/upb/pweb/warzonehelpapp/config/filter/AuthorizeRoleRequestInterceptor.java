package upb.pweb.warzonehelpapp.config.filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import upb.pweb.warzonehelpapp.annotation.AuthorizedRoles;
import upb.pweb.warzonehelpapp.exception.UserNotFoundException;
import upb.pweb.warzonehelpapp.model.User;
import upb.pweb.warzonehelpapp.service.base.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class AuthorizeRoleRequestInterceptor implements HandlerInterceptor {
    @Autowired
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (handler instanceof HandlerMethod) {
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            AuthorizedRoles authorizedRoles = handlerMethod.getMethodAnnotation(AuthorizedRoles.class);

            if (authorizedRoles != null) {
                String email = request.getHeader("X-Email");

                try {
                    User user = userService.findByEmail(email);
                    List<String> roles = new ArrayList<>(Arrays.asList(authorizedRoles.roles()));

                    log.error(user.getRole().getName());

                    if (!roles.contains(user.getRole().getName())) {

                        response.getWriter().write("User doesn't have rights to access this feature");
                        response.setStatus(HttpServletResponse.SC_FORBIDDEN);

                        return false;
                    }
                } catch (UserNotFoundException ex) {
                    log.error("Error at determining access for: email={}", email);

                    response.getWriter().write("User with email: " + email + " not found");
                    response.setStatus(HttpServletResponse.SC_NOT_FOUND);

                    return false;
                }
            }
        }

        return true;
    }
}
