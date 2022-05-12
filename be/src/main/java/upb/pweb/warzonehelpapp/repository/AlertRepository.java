package upb.pweb.warzonehelpapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.warzonehelpapp.model.Alert;

@Repository
public interface AlertRepository extends JpaRepository<Alert, Integer> {
}
