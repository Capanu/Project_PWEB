package upb.pweb.warzonehelpapp.controller.public_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import upb.pweb.warzonehelpapp.controller.public_api.resources.LoginRequest;
import upb.pweb.warzonehelpapp.controller.public_api.resources.LoginResponse;
import upb.pweb.warzonehelpapp.controller.public_api.resources.RegisterRequest;
import upb.pweb.warzonehelpapp.controller.public_api.resources.RegisterResponse;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.service.base.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/public")
@Slf4j
@RequiredArgsConstructor
public class LoginRegisterController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid LoginRequest request) throws BaseException {
        LoginResponse response = userService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid RegisterRequest request) throws BaseException {
        RegisterResponse response = userService.register(request);
        return ResponseEntity.ok(response);
    }
}
