import { Collection, OptionalId } from "mongodb";
import { connectToDatabase } from "./mongodb";

export interface IData {
    phone: string;
    data: string;
    createTime: string;
}

export interface IDataSearch {
    phone?: string;
}


export interface UserDocument extends OptionalId<Document> {
    phone: string;
    data: string;
    createTime: string;
}

class UiData {
    private userData: Collection<Document> | undefined;

    constructor() {
        this.init();
    }

    private async init() {
        const { db } = await connectToDatabase();
        this.userData = await db.collection("datas");
    }

    

    async createUserData(data: IData) {
        const params = data as UserDocument;
        await this.init();
        const result = this.userData && (await this.userData.insertOne(params));
        return result;
    }


    // async findAdmin(query: UserSearch) {
    //     await this.init2();
    //     const result = this.userData2 && (await this.userData2.find(query).toArray());
    //     return result;
    // }

    async findUser(query: IDataSearch) {
        await this.init();
        const result = this.userData && (await this.userData.find(query).toArray());
        return result;
    }

    // async deleteUser(query: UserSearch) {
    //     await this.init();
    //     const result = this.userData && (await this.userData.deleteOne({
    //         phone: query.phone,
    //     }));
    //     return result;
    // }

    // async updateUser(oldquery: UserSearch, newQuery: UserSearch) {
    //     await this.init();
    //     const result = this.userData?.updateOne(oldquery, {
    //         $set: newQuery,
    //     });
    //     return result;
    // }
}

const uiData = new UiData();

export default uiData;