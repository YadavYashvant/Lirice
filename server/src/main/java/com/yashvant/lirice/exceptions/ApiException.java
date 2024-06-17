package com.yashvant.lirice.exceptions;

public class ApiException extends RuntimeException {

	public ApiException(String message) {
		super(message);

	}

	public ApiException() {
		super();

	}

}
