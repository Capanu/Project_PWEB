package upb.pweb.warzonehelpapp.controller.internal_api;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import upb.pweb.warzonehelpapp.annotation.AuthorizedRoles;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewIssueRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.service.base.IssueService;

import javax.validation.Valid;

@RestController
@RequestMapping("/internal")
@Slf4j
@RequiredArgsConstructor
public class IssuesManagementController {
    private final IssueService issueService;

    @AuthorizedRoles(roles = "RESIDENT")
    @PostMapping("/new-issue")
    public ResponseEntity<?> newIssue(@RequestHeader("X-Email") String email, @RequestBody @Valid NewIssueRequest request) throws BaseException {
        BasicSuccessResponse response = issueService.newIssue(email, request);

        return ResponseEntity.ok(response);
    }

    @AuthorizedRoles(roles = "ADMIN")
    @GetMapping("/issues")
    public ResponseEntity<?> getAllIssues() {
        return ResponseEntity.ok(issueService.listAllIssues());
    }
}
