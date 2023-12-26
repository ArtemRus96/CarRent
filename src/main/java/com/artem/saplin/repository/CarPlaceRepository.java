package com.artem.saplin.repository;

import com.artem.saplin.model.CarPlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CarPlaceRepository extends JpaRepository<CarPlace, Long> {
}
