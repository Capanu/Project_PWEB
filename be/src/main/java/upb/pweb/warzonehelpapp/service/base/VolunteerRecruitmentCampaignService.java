package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.BasicSuccessResponse;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.EnrollRequest;
import upb.pweb.warzonehelpapp.controller.internal_api.resources.NewVolunteerRecruitmentCampaignRequest;
import upb.pweb.warzonehelpapp.exception.BaseException;
import upb.pweb.warzonehelpapp.exception.InvalidCampaignException;
import upb.pweb.warzonehelpapp.exception.ReachedMaximumNumberOfEnrollmentsException;
import upb.pweb.warzonehelpapp.model.Enrollment;
import upb.pweb.warzonehelpapp.model.User;
import upb.pweb.warzonehelpapp.model.VolunteerRecruitmentCampaign;
import upb.pweb.warzonehelpapp.repository.EnrollmentRepository;
import upb.pweb.warzonehelpapp.repository.VolunteerRecruitmentCampaignRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class VolunteerRecruitmentCampaignService {
    private final VolunteerRecruitmentCampaignRepository volunteerRecruitmentCampaignRepository;
    private final EnrollmentRepository enrollmentRepository;

    private final UserService userService;

    public BasicSuccessResponse newVolunteerRecruitmentCampaign(NewVolunteerRecruitmentCampaignRequest request) {
        VolunteerRecruitmentCampaign volunteerRecruitmentCampaign = VolunteerRecruitmentCampaign.builder()
                .name(request.getName())
                .description(request.getDescription())
                .targetNumberOfVolunteers(request.getTargetNumberOfVolunteers())
                .currentNumberOfVolunteers(0)
                .build();

        volunteerRecruitmentCampaignRepository.save(volunteerRecruitmentCampaign);

        return new BasicSuccessResponse();
    }

    public BasicSuccessResponse enrollVolunteer(String email, EnrollRequest request) throws BaseException {
        User volunteer = userService.findByEmail(email);
        VolunteerRecruitmentCampaign volunteerRecruitmentCampaign = volunteerRecruitmentCampaignRepository
                .findById(request.getCampaignId())
                .orElseThrow(() -> new InvalidCampaignException(request.getCampaignId()));

        // Check if the volunteer is already enrolled in 3 campaigns
        List<Enrollment> enrollments = enrollmentRepository.findAllByVolunteer(volunteer);

        if (enrollments.size() == 3) {
            throw new ReachedMaximumNumberOfEnrollmentsException();
        }

        // Update the number of enrolled volunteers
        volunteerRecruitmentCampaign.setCurrentNumberOfVolunteers(volunteerRecruitmentCampaign.getCurrentNumberOfVolunteers() + 1);
        volunteerRecruitmentCampaign = volunteerRecruitmentCampaignRepository.save(volunteerRecruitmentCampaign);

        // Create new enrollment entry
        Enrollment newEnrollment = Enrollment.builder()
                .volunteer(volunteer)
                .volunteerRecruitmentCampaign(volunteerRecruitmentCampaign)
                .build();

        enrollmentRepository.save(newEnrollment);

        return new BasicSuccessResponse();
    }

    public List<VolunteerRecruitmentCampaign> getEnrolledInCampaigns(String email) throws BaseException {
        User volunteer = userService.findByEmail(email);
        List<Enrollment> enrollments = enrollmentRepository.findAllByVolunteer(volunteer);

        return enrollments.stream()
                .map(Enrollment::getVolunteerRecruitmentCampaign)
                .collect(Collectors.toList());
    }

    public List<VolunteerRecruitmentCampaign> listAllVolunteerRecruitmentCampaigns() {
        return volunteerRecruitmentCampaignRepository.findAll();
    }
}
