import { Collection, OptionalId } from "mongodb";
import { connectToDatabase } from "./mongodb";

export interface Xiaofei {
    dafen: string;
    userInfo: string;
    phone: string;
    createTime: string;
}

export interface UserDocument extends OptionalId<Document> {
    dafen: string;
    userInfo: string;
    phone: string;
    createTime: string;
}

class UiXiaofei {
    private userData: Collection<Document> | undefined;

    constructor() {
        this.init();
    }

    private async init() {
        const { db } = await connectToDatabase();
        this.userData = await db.collection("xiaofei");
    }

    async createUser(data: Xiaofei) {
        const params = data as UserDocument;
        await this.init();
        const result = this.userData && (await this.userData.insertOne(params));
        return result;
    }

    async findUser(query: { phone: string }) {
        await this.init();
        const result = this.userData && (await this.userData.find(query).toArray());
        return result;
    }


    // async findAdmin(query: UserSearch) {
    //     await this.init2();
    //     const result = this.userData2 && (await this.userData2.find(query).toArray());
    //     return result;
    // }

    // async findUser(query: UserSearch) {
    //     await this.init();
    //     const result = this.userData && (await this.userData.find(query).toArray());
    //     return result;
    // }

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

const uiXiaofei = new UiXiaofei();

export default uiXiaofei;