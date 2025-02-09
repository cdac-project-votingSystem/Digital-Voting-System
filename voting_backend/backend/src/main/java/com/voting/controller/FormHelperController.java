// package com.voting.controller;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.voting.dtos.ConstituencyResponseDTO;
// import com.voting.service.ConstituencyService;

// @RestController
// @RequestMapping("/formHelper")
// public class FormHelperController {
// 	@Autowired
//     private ConstituencyService constituencyService;
	
// 	 @GetMapping("/constituency")
// 	 public List<ConstituencyResponseDTO> getAllConstituencies() {
// 		 return constituencyService.getAllConstituencies();
// 	 }
// }
