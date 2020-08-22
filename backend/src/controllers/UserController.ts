import { Request, Response } from "express";
import knex from "../database/connection";

class UserController {
	async index(request: Request, response: Response) {
		const users = await knex("users").select("*");

		if (!users)
			return response
				.status(204)
				.json({ message: "Não há usuários cadastrados." });

		return response.status(200).json(users);
	}

	async show(request: Request, response: Response) {
		const { id } = request.params;

		const user = await knex("users").where("id", id).first();

		if (!user)
			return response
				.status(204)
				.json({ message: "Não há um usuário com esse ID." });

		return response.status(200).json(user);
	}

	async create(request: Request, response: Response) {
		const { name, email, phone } = request.body;

		const user = {
			name,
			email,
			phone,
		};

		const [id] = await knex("users").insert(user);
		if (id)
			return response
				.status(201)
				.json({ message: "Usuário criado com sucesso!" });
		return response
			.status(500)
			.json({ message: "Não foi possível criar o usuário. " });
	}

	async update(request: Request, response: Response) {
		const { id } = request.params;

		const user = await knex("users").where("id", id).first();

		let { name, email, phone } = request.body;

		if (name === "") name = user.name;
		if (email === "") email = user.email;
		if (phone === "") phone = user.phone;

		const updatedRows = await knex("users").where("id", id).first().update({
			name,
			email,
			phone,
		});

		if (!updatedRows)
			return response
				.status(400)
				.json({ message: "Não há um usuário com esse ID." });

		return response
			.status(200)
			.json({ message: "Usuário atualizado com sucesso" });
	}

	async delete(request: Request, response: Response) {
		const { id } = request.params;

		const deletedRow = await knex("users").where("id", id).first().delete();

		if (!deletedRow)
			return response
				.status(400)
				.json({ message: "Não há usuário com esse ID." });

		return response
			.status(200)
			.json({ message: "Usuário deletado com sucesso" });
	}
}

export default UserController;
