package com.aluntis.tim_tisa.kviz.entity;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Map;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "spajalica_pitanje")
public class Spajalica_Pitanja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name="tekst_pitanja")
    private String tekstPitanja;
    @Column(name="spojka_lijeva_1")
    private String spojkaLijeva1;
    @Column(name="spojka_desna_1")
    private String spojkaDesna1;
    @Column(name="spojka_lijeva_2")
    private String spojkaLijeva2;
    @Column(name="spojka_desna_2")
    private String spojkaDesna2;
    @Column(name="spojka_lijeva_3")
    private String spojkaLijeva3;
    @Column(name="spojka_desna_3")
    private String spojkaDesna3;
    @Column(name="spojka_lijeva_4")
    private String spojkaLijeva4;
    @Column(name="spojka_desna_4")
    private String spojkaDesna4;
    @Column(name="spojka_lijeva_5")
    private String spojkaLijeva5;
    @Column(name="spojka_desna_5")
    private String spojkaDesna5;
    @Column(name="mode")
    private Integer mode;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "oblast_id",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Oblast oblast;

    }


