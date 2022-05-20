package upb.pweb.warzonehelpapp.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.warzonehelpapp.model.Role;
import upb.pweb.warzonehelpapp.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByEmail(String email);

    List<User> findAllByRole(Role role);
}
