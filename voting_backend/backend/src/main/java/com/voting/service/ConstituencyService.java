package com.voting.service;
<<<<<<< HEAD

import java.util.List;

import com.voting.pojos.Constituency;

public interface ConstituencyService {
	List<Constituency> getAllConstituency();
}
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.voting.dao.ConstituencyDao;
import com.voting.dtos.ConstituencyResponseDTO;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ConstituencyService {

    @Autowired
    private ConstituencyDao constituencyDao;

    public List<ConstituencyResponseDTO> getAllConstituencies() {
        return constituencyDao.findAll()
                .stream()
                .map(constituency -> new ConstituencyResponseDTO(constituency.getId(), constituency.getName()))
                .collect(Collectors.toList());
    }
}

>>>>>>> v3
