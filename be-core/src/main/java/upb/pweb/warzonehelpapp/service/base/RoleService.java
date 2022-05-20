package upb.pweb.warzonehelpapp.service.base;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import upb.pweb.warzonehelpapp.exception.InvalidRoleException;
import upb.pweb.warzonehelpapp.model.Role;
import upb.pweb.warzonehelpapp.repository.RoleRepository;

@Service
@Slf4j
@RequiredArgsConstructor
public class RoleService {
    private final RoleRepository repository;

    public Role findByName(String name) throws InvalidRoleException {
        return repository.findRoleByName(name).orElseThrow(() ->
                new InvalidRoleException(name));
    }
}