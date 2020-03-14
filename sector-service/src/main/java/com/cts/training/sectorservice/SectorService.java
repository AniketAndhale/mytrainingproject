package com.cts.training.sectorservice;

import java.util.List;


public interface SectorService {
	public String  addSector(Sector se);
	public void deleteSector(int id);
	public String updateSector(Sector se);
	public Sector getSectorById(int id);

	public List<Sector> getAllSector();
}
