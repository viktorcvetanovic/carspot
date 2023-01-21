package com.carspot.carspot.entity;

import java.io.Serializable;
import java.util.*;
import javax.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "post")
@RequiredArgsConstructor
public class Post implements Serializable {
	@Id
	@Column(name = "post_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(name = "post_name")
	private String postName;
	@Column(name = "post_desc")
	private String postDesc;
	@Column(name = "img")
	private String img;
	@Column(name = "user_fk")
	private Integer userFk;
	
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Post post = (Post) o;
		return id.equals(post.id);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


}