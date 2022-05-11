package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.public_api.resources.LoginRequest;
import upb.pweb.warzonehelpapp.controller.public_api.resources.LoginResponse;
import upb.pweb.warzonehelpapp.controller.public_api.resources.RegisterRequest;
import upb.pweb.warzonehelpapp.controller.public_api.resources.RegisterResponse;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.exception.EmailNotUniqueException;
import upb.pweb.warzonehelpapp.exception.InvalidPasswordException;
import upb.pweb.warzonehelpapp.exception.UserNotFoundException;
import upb.pweb.warzonehelpapp.model.Role;
import upb.pweb.warzonehelpapp.model.User;
import upb.pweb.warzonehelpapp.repository.UserRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    private final RoleService roleService;

    public User findByEmail(String email) throws UserNotFoundException {
        return repository.findUserByEmail(email).orElseThrow(() -> new UserNotFoundException(email));
    }

    public LoginResponse login(LoginRequest request) throws BaseException {
        String email = request.getEmail();

        // Find user
        User user = findByEmail(email);

        // Check if password is correct
        if (!request.getPassword().equals(user.getPassword())) {
            throw new InvalidPasswordException(email);
        }

        // Compute response
        LoginResponse response = new LoginResponse();
        response.setEmail(email);
        response.setRole(user.getRole().getName());

        return response;
    }

    public boolean existsUserWithEmail(String email) {
        return repository.findUserByEmail(email).isPresent();
    }

    public User saveUser(User user) {
        return repository.save(user);
    }

    public RegisterResponse register(RegisterRequest request) throws BaseException {
        String email = request.getEmail();

        // If there is already an account made on this email throw error
        if (existsUserWithEmail(email)) {
            throw new EmailNotUniqueException(email);
        }

        String roleName = request.getRole();

        // Check if role is valid, if not throws exception
        Role role = roleService.findByName(roleName);

        // Create the new user
        User newUser = User.builder()
                .email(email)
                .password(request.getPassword())
                .role(role)
                .build();

        // Persist it
        newUser = saveUser(newUser);

        // Compute response
        RegisterResponse response = new RegisterResponse();
        response.setEmail(newUser.getEmail());
        response.setRole(newUser.getRole().getName());

        return response;
    }
}
