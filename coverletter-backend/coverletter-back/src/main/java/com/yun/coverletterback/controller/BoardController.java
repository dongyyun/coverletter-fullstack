package com.yun.coverletterback.controller;

import java.util.List;

import com.yun.coverletterback.model.Board;
import com.yun.coverletterback.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;


    // get all board
    @GetMapping
    public List<Board> getAllBoards() {

        return boardService.getAllBoard();
    }

}
