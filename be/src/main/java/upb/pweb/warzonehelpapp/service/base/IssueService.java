package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewIssueRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.model.Issue;
import upb.pweb.warzonehelpapp.model.User;
import upb.pweb.warzonehelpapp.repository.IssueRepository;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class IssueService {
    private final IssueRepository repository;
    private final UserService userService;

    public BasicSuccessResponse newIssue(String email, NewIssueRequest request) throws BaseException {
        User user = userService.findByEmail(email);

        Issue newIssue = Issue.builder()
                .name(request.getName())
                .description(request.getDescription())
                .resident(user)
                .build();

        newIssue = repository.save(newIssue);

        return new BasicSuccessResponse("Issue created successfully [timestamp: " + newIssue.getCreationDate() + "]");
    }

    public List<Issue> listAllIssues() {
        return repository.findAll();
    }
}
