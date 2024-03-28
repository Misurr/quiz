package com.aluntis.tim_tisa.kviz.entity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Map;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name ="easy")
public class Easy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="ime")
    private String ime;
    @Column(name="vrijeme")
    private Time vrijeme;
    @Column(name="broj_bodova")
    private Integer brojBodova;
    @Column(name="tipPitanja")
    private Integer tipPitanja;
}
