import { Request, Response, NextFunction } from "express";
import * as query from "./query";

export const create = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { title, content } = req.body;
    
    const post: any = await query.create(title, content);
    
    res.status(200).json({
        message: "성공",
        post
    });
};

export const readOne = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;
    
    const post: any = await query.readOne(id);
    
    if (!post) throw new Error("존재하지 않는 글");
    
    res.status(200).json({
        message: "성공",
        post,
    });
};

export const readAll = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const posts: any = await query.readAll();
    
    res.status(200).json({
        message: "성공",
        posts
    });
};

export const updateOne = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;
    const { title, content } = req.body;

    const post: any = await query.update(id, title, content);

    if(post!) throw new Error("존재하지 않는 글");

    res.status(200).json({
         message: "업데이트 성공"
    });
};

export const deleteOne = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;

    const post: any = await query.deleteOne(id);

    if(post!) throw new Error("존재하지 않는 글");

    res.status(200).json({
        message: "성공",
        post
    });
}