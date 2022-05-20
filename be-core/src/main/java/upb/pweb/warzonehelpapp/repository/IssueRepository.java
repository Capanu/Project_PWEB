package upb.pweb.warzonehelpapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.warzonehelpapp.model.Issue;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Integer> {
}
