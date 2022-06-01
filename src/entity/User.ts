import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        default: "",
    })
    firstName: string

    @Column({
        default: "",
    })
    lastName: string

    @Column({
        default: 0,
    })
    age: number

    // @Column({
    //     default: false
    // })
    // isActive: boolean 

    @Column({
        default: ""
    })
    email: string

    @Column({
        default: ""
    })
    password: string

}
