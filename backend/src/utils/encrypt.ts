import bcrypt from "bcrypt";
import { EncryptionError } from "./internal-error";

export class Encryption {
	private password: string;

	constructor(password: string) {
		this.password = password;
	}

	public async generateHash(salts = 8): Promise<string | undefined> {
		try {
			return await bcrypt.hash(this.password, salts);
		} catch (error) {
			throw new EncryptionError(`Unable to hash ${error}`);
		}
	}
}
