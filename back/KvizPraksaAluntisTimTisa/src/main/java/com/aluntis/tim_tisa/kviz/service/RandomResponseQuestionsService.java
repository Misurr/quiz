package com.aluntis.tim_tisa.kviz.service;

import com.aluntis.tim_tisa.kviz.entity.MultipleChoicePitanje;
import com.aluntis.tim_tisa.kviz.entity.SingleChoice;
import com.aluntis.tim_tisa.kviz.entity.Spajalica_Pitanja;
import com.aluntis.tim_tisa.kviz.entity.TrueFalsePitanje;
import com.aluntis.tim_tisa.kviz.repository.MultipleChoiceRepository;
import com.aluntis.tim_tisa.kviz.repository.SingleChoiceRepository;
import com.aluntis.tim_tisa.kviz.repository.Spajalice_PitanjaRepository;
import com.aluntis.tim_tisa.kviz.repository.TrueFalsePitanjeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class RandomResponseQuestionsService {
    @Autowired
    private SingleChoiceRepository singleChoiceRepository;

    @Autowired
    private MultipleChoiceRepository multipleChoiceRepository;

    @Autowired
    private Spajalice_PitanjaRepository spajalicePitanjaRepository;

    @Autowired
    private TrueFalsePitanjeRepository trueFalsePitanjeRepository;

    public List<?> getRandomQuestions(Integer type, Integer areaId, Integer mode) {

        switch (type) {
            case 1:
                List<SingleChoice> allSingleChoice = singleChoiceRepository.findByOblastIdAndMode(areaId, mode);
                Collections.shuffle(allSingleChoice);
                return allSingleChoice.subList(0, Math.min(allSingleChoice.size(), 10));
            case 2:
                List<MultipleChoicePitanje> allMultipleChoice = multipleChoiceRepository.findByOblastIdAndMode(areaId, mode);
                Collections.shuffle(allMultipleChoice);
                return allMultipleChoice.subList(0, Math.min(allMultipleChoice.size(), 10));
            case 3:
                List<TrueFalsePitanje> allTrueFalsePitanje = trueFalsePitanjeRepository.findByOblastIdAndMode(areaId, mode);
                Collections.shuffle(allTrueFalsePitanje);
                return allTrueFalsePitanje.subList(0, Math.min(allTrueFalsePitanje.size(), 10));
            case 4:
                List<Spajalica_Pitanja> allSpajalicePitanje = spajalicePitanjaRepository.findByOblastIdAndMode(areaId, mode);
                Collections.shuffle(allSpajalicePitanje);
                return allSpajalicePitanje.subList(0, Math.min(allSpajalicePitanje.size(), 10));
            default:
                return null;
        }
    }
}
