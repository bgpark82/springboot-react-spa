package com.clone.code.dto;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Table
@Entity
@Data
public class ReplyDto {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int user_id;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="id")
	private StoreDto storeDto;
	private int star;
	private String content;
	private Date date_post;
	
	
	
}
