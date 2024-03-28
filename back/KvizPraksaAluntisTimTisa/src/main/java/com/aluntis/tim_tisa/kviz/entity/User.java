package com.aluntis.tim_tisa.kviz.entity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Timer;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name ="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="ime")
    private String ime;
    @Column(name="tip_pitanja")
    private Integer tipPitanja;
    @Column(name="vrijeme")
    private Time vrijeme;
    @Column(name="broj_bodova")
    private Integer brojBodova;
    @Column(name="mode")
    private Integer mode;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "oblast_id",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Oblast oblast;

}


