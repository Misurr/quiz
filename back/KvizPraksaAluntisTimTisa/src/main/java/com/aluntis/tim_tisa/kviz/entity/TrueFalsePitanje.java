package com.aluntis.tim_tisa.kviz.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class TrueFalsePitanje {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	private String tesktPitanja;
	public String getTesktPitanja() {
		return tesktPitanja;
	}
	public void setTesktPitanja(String tesktPitanja) {
		this.tesktPitanja = tesktPitanja;
	}
    @Column(name="mode")
	private Integer mode;
	private String slika;

	public Integer getMode() {
		return mode;
	}

	public void setMode(Integer mode) {
		this.mode = mode;
	}

	private Byte tacanOdgovor;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = false)
	@JoinColumn(name = "oblast_id", nullable = false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Oblast oblast;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getSlika() {
		return slika;
	}
	public void setSlika(String slika) {
		this.slika = slika;
	}
	public Byte getTacanOdgovor() {
		return tacanOdgovor;
	}
	public void setTacanOdgovor(Byte tacanOdgovor) {
		this.tacanOdgovor = tacanOdgovor;
	}
	public TrueFalsePitanje() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TrueFalsePitanje(Integer id, String tekstPitanja, String slika, Byte tacanOdgovor,Integer mode) {
		super();
		this.id = id;
		this.tesktPitanja = tekstPitanja;
		this.slika = slika;
		this.tacanOdgovor = tacanOdgovor;
		this.mode=mode;
	}
	
	public Oblast getOblast() {
		return oblast;
	}
	
	public void setOblast(Oblast oblast) {
		this.oblast = oblast;
	}
	
	
	

}