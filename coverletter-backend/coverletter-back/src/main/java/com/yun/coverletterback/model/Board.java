package com.yun.coverletterback.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int number;

    @Column(name = "school_period")
    private String schoolPeriod;

    @Column(name = "school_type")
    private String schoolType;

    @Column(name = "school_name")
    private String schoolName;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "school_major")
    private String schoolMajor;

    @Column(name = "school_grade")
    private String schoolGrade;

    @Column(name = "company_period")
    private String companyPeriod;

    @Column(name = "company_reason")
    private String companyReason;

    @Column(name = "company_part")
    private String companyPart;

    @Column(name = "cert_period")
    private String certPeriod;

    @Column(name = "company_grade")
    private String companyGrade;

    @Column(name = "cert_type")
    private String certType;

    @Column(name = "cert_name")
    private String certName;

    @Column(name = "cert_provide")
    private String certProvide;

    @Column(name = "cert_grade")
    private String certGrade;



}