class InternalError extends Error {
	constructor(
		public message: string,
		protected code: number = 500,
		protected description?: string,
	) {
		super(message);
		this.name = this.constructor.name;
		Error.captureStackTrace(this, this.constructor);
	}
}

export class ServerResponseError extends InternalError {
	constructor(message: string) {
		const internalMessage = "Unexpected error when trying to comunicate to Api";
		super(`${internalMessage}. ${message}`);
	}
}

export class EncryptionError extends InternalError {
	constructor(message: string) {
		const encryptionInternalMessage =
			"Unexpected error when trying to encrypt a password";
		super(`${encryptionInternalMessage}. ${message}`);
	}
}
