package upb.pweb.warzonehelpapp.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

import static javax.persistence.GenerationType.IDENTITY;

@Table(name = "donation")
@Entity
@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Donation {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "user_id", nullable = false)
    private Integer id;

    @Column(name = "firstname", nullable = false)
    private String firstname;

    @Column(name = "lastname", nullable = false)
    private String lastname;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "card_code", nullable = false)
    private String cardCode;

    @Column(name = "donatedAmount", nullable = false)
    private Integer donatedAmount;

    @ManyToOne(optional = false)
    @JoinColumn(name = "campaign_id", nullable = false)
    private FundraisingCampaign fundraisingCampaign;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(name = "creation_date", nullable = false, updatable = false)
    private Date creationDate;

    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    @Column(name = "update_date", insertable = false)
    private Date updateDate;
}
