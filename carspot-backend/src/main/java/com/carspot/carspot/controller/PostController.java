package com.carspot.carspot.controller;

import com.carspot.carspot.entity.*;
import com.carspot.carspot.service.*;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import lombok.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {
	private final PostService postService;

	@GetMapping
	@ApiOperation(value = "", nickname = "getAllPosts")
	public ResponseEntity<List<Post>> getAllPosts(@RequestParam(name = "q", required = false) Specification<Post> specification) {
		return ResponseEntity.ok(postService.findAll(specification));
	}

	@GetMapping("/{postId}")
	@ApiOperation(value = "", nickname = "getPostById")
	public ResponseEntity<Post> getPostById(@PathVariable Integer postId) {
		return ResponseEntity.ok(postService.findById(postId));
	}

	@PostMapping
	@ApiOperation(value = "", nickname = "savePost")
	public ResponseEntity<Post> savePost(@RequestBody Post post) {
		return ResponseEntity.status(HttpStatus.CREATED).body(postService.save(post));
	}

	@PutMapping
	@ApiOperation(value = "", nickname = "updatePost")
	public ResponseEntity<Post> updatePost(@RequestBody Post post) {
		return ResponseEntity.ok(postService.update(post));
	}

	@DeleteMapping("/{postId}")
	@ApiOperation(value = "", nickname = "deletePostById")
	public void deletePostById(@PathVariable Integer postId) {
		postService.deleteById(postId);
	}

}

