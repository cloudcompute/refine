export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
}

export interface IPostVariables {
    id: string;
    title: string;
    content: string;
}
