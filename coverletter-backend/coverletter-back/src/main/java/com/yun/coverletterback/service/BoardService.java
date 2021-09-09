package com.yun.coverletterback.service;

import java.util.List;

import com.yun.coverletterback.model.Board;
import com.yun.coverletterback.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;


    // get boards data
    public List<Board> getAllBoard() {
        return boardRepository.findAll();
    }

}