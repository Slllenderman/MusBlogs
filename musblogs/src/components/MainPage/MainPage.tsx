import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import "../../styles/buttons.scss";
import "../../styles/inputs.scss";
import "../../styles/names.scss";
import { Post } from "../Post/Post";
import { FullPostProps } from "../../Types/DataBase";
import { infPosts } from "../../store/infinity";

export const MainPage: React.FC = () => {

    const [posts, setPosts] = useState<Array<FullPostProps>>([]);

    useEffect(() => {
        setPosts([...infPosts])
    }, [])

    return (
        <div className="feed">
            <div className="top_shadow"></div>
            <div className="feed_content">
                <div className="pink_header">
                    Ваша лента
                </div>
                <div className="posts">
                    {posts.map((post: FullPostProps, index: number) => {
                        return (
                            <Post {...post} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}