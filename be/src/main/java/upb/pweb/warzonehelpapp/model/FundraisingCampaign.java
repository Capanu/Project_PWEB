package upb.pweb.warzonehelpapp.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;

import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Table(name = "fundraising_campaign")
@Entity
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FundraisingCampaign {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "iban", nullable = false)
    private String iban;

    @Column(name = "target_amount", nullable = false)
    private Integer targetAmount;

    @Column(name = "current_amount", nullable = false, columnDefinition = "integer default 0")
    private Integer currentAmount;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(name = "creation_date", nullable = false, updatable = false)
    private Date creationDate;

    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    @Column(name = "update_date", insertable = false)
    private Date updateDate;
}
