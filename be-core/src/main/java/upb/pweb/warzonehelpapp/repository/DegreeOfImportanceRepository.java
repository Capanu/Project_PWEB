package upb.pweb.warzonehelpapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.warzonehelpapp.model.DegreeOfImportance;

import java.util.Optional;

@Repository
public interface DegreeOfImportanceRepository extends JpaRepository<DegreeOfImportance, Integer> {
    Optional<DegreeOfImportance> findByName(String name);
}
