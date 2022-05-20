package upb.pweb.warzonehelpapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import upb.pweb.warzonehelpapp.model.Donation;

import java.util.Optional;

public interface DonationRepository extends JpaRepository<Donation, Integer> {
    Optional<Donation> findByEmail(String email);
}
