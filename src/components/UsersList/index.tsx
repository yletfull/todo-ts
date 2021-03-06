import React, { useEffect } from "react";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';

function UsersList(){
    const {
        users,
        error,
        isFetching
    } = useTypeSelector((state) => state.user)

    const {
        fetchUsers,
    } = useActions();

    useEffect(() => {
        fetchUsers();
    }, [])

    if(isFetching) {
        return (
            <h1>
                Идет загрузка...
            </h1>
        )
    }

    if(error) {
        return (
            <h1>
                {error}
            </h1>
        )
    }

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default UsersList;