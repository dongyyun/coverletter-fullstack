package com.yun.coverletterback.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer number;

    @Column(name = "type")
    private String type;

    @Column(name = "title")
    private String title;

    @Column(name = "contents")
    private String contents;

    @Column(name = "members_no")
    private Integer memberNo;

    @Column(name = "likes")
    private Integer likes;

    @Column(name = "counts")
    private Integer counts;



}