import { Collection, OptionalId } from "mongodb";
import { connectToDatabase } from "./mongodb";

export interface User {
    phone: string;
    password: string;
}

export interface UserSearch {
    phone?: string;
    password?: string;
}

export interface UserDocument extends OptionalId<Document> {
    phone: string;
    password: string;
}

class UiUser {
    private userData: Collection<Document> | undefined;
    private userData2: Collection<Document> | undefined;

    constructor() {
        this.init();
    }

    private async init() {
        const { db } = await connectToDatabase();
        this.userData = await db.collection("uiUsers");
    }

    private async init2() {
        const { db } = await connectToDatabase();
        this.userData2 = await db.collection("admin");
    }

    async createUser(data: User) {
        const params = data as UserDocument;
        await this.init();
        const result = this.userData && (await this.userData.insertOne(params));
        return result;
    }

    async createAdmin(data: User) {
        const params = data as UserDocument;
        await this.init2();
        const result = this.userData2 && (await this.userData2.insertOne(params));
        return result;
    }

    async findAdmin(query: UserSearch) {
        await this.init2();
        const result = this.userData2 && (await this.userData2.find(query).toArray());
        return result;
    }

    async findUser(query: UserSearch) {
        await this.init();
        const result = this.userData && (await this.userData.find(query).toArray());
        return result;
    }

    async deleteUser(query: UserSearch) {
        await this.init();
        const result = this.userData && (await this.userData.deleteOne({
            phone: query.phone,
        }));
        return result;
    }

    async updateUser(oldquery: UserSearch, newQuery: UserSearch) {
        await this.init();
        const result = this.userData?.updateOne(oldquery, {
            $set: newQuery,
        });
        return result;
    }
}

const uiUsers = new UiUser();

export default uiUsers;