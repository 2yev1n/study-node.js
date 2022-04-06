import { Post } from "../../../models/post";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../../.env") });

export const create = async(
    title: string,
    content: Text
) => {
    return await Post.create({
        title,
        content,
    });
};

export const readOne = async(id:string): Promise<Post> => {
    const post: any = await Post.findOne({
        where: { id }
    });
    return post;
}

export const readAll = async(): Promise<Post> => {
    const posts: any = await Post.findAll();

    return posts;
}

export const update = async(id: string, title:string, content:Text) => {
    try{
        const post = await Post.update({
            title: title,
            content: content,
        },{
            where: { id : id }
        });
    } catch(err) {
        console.error(err);
        throw err;
    }
};

export const deleteOne = async(id: string) => {
    try{
        const post = await Post.destroy({
            where: { id }
        });
    } catch(err){
        console.error(err);
        throw err;
    }
};