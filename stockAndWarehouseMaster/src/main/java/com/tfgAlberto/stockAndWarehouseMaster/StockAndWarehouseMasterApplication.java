package com.tfgAlberto.stockAndWarehouseMaster;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})
public class StockAndWarehouseMasterApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockAndWarehouseMasterApplication.class, args);
	}

}
