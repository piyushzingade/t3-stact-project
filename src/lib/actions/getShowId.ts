"use server"

import { api } from "~/trpc/server";

export default async function getShowById(id :string) {
    const getShow = await api.show.getById({id : Number(id)})
    if(!getShow){
        return null;
    }
    return {
        title: getShow.title,
        description:getShow.description,
        thumbnail: getShow.thumbnail,
        price:getShow.price,
        location:getShow.location,
        date:getShow.date

        
    }
}