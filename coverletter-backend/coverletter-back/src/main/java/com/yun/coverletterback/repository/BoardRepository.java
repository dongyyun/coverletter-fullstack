package com.yun.coverletterback.repository;


import java.util.List;

import com.yun.coverletterback.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BoardRepository extends JpaRepository<Board, Integer> {}