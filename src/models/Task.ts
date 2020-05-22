import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm/browser'

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  public id!: string

  @Column('text')
  public title!: string

  @Column('text')
  public description!: string

  @Column('boolean')
  public isArchived!: boolean

  @CreateDateColumn()
  public createdAt!: Date

  @UpdateDateColumn()
  public updatedAt!: Date
}
