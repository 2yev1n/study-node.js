import { sequelize } from "../config/config";
import Sequelize, { Model } from "sequelize";

export class Post extends Model {
    readonly id!: number;
    title!: string;
    content!: Text;
};

Post.init(
    {
        title: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        tableName: "Posts",
        modelName: "posts",
        charset: "UTF8MB4",
        collate: "UTF8MB4_GENERAL_CI"
    }
)