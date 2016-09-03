<?php

namespace Repositories\User;

use Illuminate\Database\Eloquent\Model;

/**
 * User repository, containing commonly used queries
 */
class UserRepository implements UserInterface
{
    // Our Eloquent User model
    protected $userModel;

    /**
     * Setting our class $userModel to the injected model
     *
     * @param Model $user
     */
    public function __construct(Model $user)
    {
        $this->userModel = $user;
    }

    /**
     * Returns the user object associated with the passed id
     *
     * @param mixed $userId
     * @return Model
     */
    public function getUserById($userId)
    {
        return $this->userModel->find($userId);
    }

    /**
     * Returns all users
     */
    public function getAllUsers()
    {
        // Search for all
        $users = $this->userModel->all();

        if ($users)
        {
            return $users;
        }

        return null;
    }

    /**
     * Returns all users by role
     */
    public function getAllUsersByRole($role)
    {
        // Search for all users by role
        $users = $this->userModel->where('role', '=', $role)->get();

        if ($users)
        {
            return $users;
        }

        return null;
    }
}