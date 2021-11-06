import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id)

    if (userIsAdmin.admin === false || !userIsAdmin) {
      throw new Error('User is not an admin')
    }

    if (userIsAdmin.admin === true) {
      const users = this.usersRepository.list()
      return users
    }
  }
}

export { ListAllUsersUseCase };
