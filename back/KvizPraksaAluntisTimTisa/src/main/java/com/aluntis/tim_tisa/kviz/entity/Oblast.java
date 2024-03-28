package com.aluntis.tim_tisa.kviz.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.Map;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Oblast {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String naziv;
	private String opis;
	private Byte aktivno;
	private String slika;
	@Override
	public String toString(){
		return "Oblast [id=" + id + ", naziv=" + naziv + ", opis=" + opis + ", aktivno=" + aktivno +", slika="+slika+"]";
	}
}

