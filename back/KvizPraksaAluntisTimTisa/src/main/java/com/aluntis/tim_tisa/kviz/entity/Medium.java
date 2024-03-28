package com.aluntis.tim_tisa.kviz.entity;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name ="medium")
public class Medium {
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
