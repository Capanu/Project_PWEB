package upb.pweb.mailsender.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import upb.pweb.mailsender.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}
