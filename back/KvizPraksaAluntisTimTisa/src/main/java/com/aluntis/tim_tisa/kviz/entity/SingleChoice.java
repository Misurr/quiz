package com.aluntis.tim_tisa.kviz.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "single_choice_pitanje")
public class SingleChoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
		
	@Column(name = "tekst_pitanja")
	private String tekstPitanja;
	
	private String slika;
	
	@Column(name = "odgovor_1")
	private String odgovor1;
	@Column(name = "odgovor_2")
	private String odgovor2;
	@Column(name = "odgovor_3")
	private String odgovor3;
	@Column(name = "odgovor_4")
	private String odgovor4;
	@Column(name = "tacan_odgovor")
	private Integer tacanOdgovor;
	@Column(name = "mode")
	private Integer mode;
	@ManyToOne
    @JoinColumn(name = "oblast_id")
	private Oblast oblast;
	

}
