package com.example.demo.repository;

// ContactRepository.java


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ContactMessage;

public interface ContactRepository extends JpaRepository<ContactMessage, Long> {}