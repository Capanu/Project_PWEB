package upb.pweb.warzonehelpapp.controller.internal_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewAlertRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.service.base.AlertService;

import javax.validation.Valid;

@RestController
@RequestMapping("/internal")
@Slf4j
@RequiredArgsConstructor
public class AlertsManagementController {
    private final AlertService alertService;

    @PostMapping("/new-alert")
    public ResponseEntity<?> newAlert(@RequestBody @Valid NewAlertRequest request) throws BaseException {
        BasicSuccessResponse response = alertService.newAlert(request);

        return ResponseEntity.ok(response);
    }
}
