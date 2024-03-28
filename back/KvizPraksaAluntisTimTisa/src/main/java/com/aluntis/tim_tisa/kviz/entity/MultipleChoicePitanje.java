package com.aluntis.tim_tisa.kviz.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name="multiple_choice_pitanje")
public class MultipleChoicePitanje{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String tekstPitanja;
    private String slika;
    @Column(name="odgovor_1")
    private String odgovor1;
    @Column(name="odgovor_2")
    private String odgovor2;
    @Column(name="odgovor_3")
    private String odgovor3;
    @Column(name="odgovor_4")
    private String odgovor4;
    @Column(name="odgovor_5")
    private String odgovor5;
    @Column(name="odgovor_6")
    private String odgovor6;
    private String tacanOdgovor;
    @Column(name="mode")
    private Integer mode;
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "oblast_id",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Oblast oblast;

//    private Integer oblastId;
//
//    public MultipleChoicePitanje(String tekstPitanja, String slika, String odgovor1, String odgovor2, String odgovor3, String odgovor4, String odgovor5, String odgovor6, String tacanOdgovor, Oblast oblast){
//        this.tekstPitanja=tekstPitanja;
//        this.slika=slika;
//        this.odgovor1=odgovor1;
//        this.odgovor2=odgovor2;
//        this.odgovor3=odgovor3;
//        this.odgovor4=odgovor4;
//        this.odgovor5=odgovor5;
//        this.odgovor6=odgovor6;
//        this.tacanOdgovor = tacanOdgovor;
////        this.tacanOdgovor = new int[tacanOdgovor.length];
////        for (int i=0; i<tacanOdgovor.length; i++) {
////            this.tacanOdgovor[i] = tacanOdgovor[i];
////        }
//        this.oblast = oblast;
//    }

}
