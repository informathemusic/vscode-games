import * as vscode from "vscode";

import { GameView } from "@/GameView";

import html from "./Simon.html";
import Utils from "@/Utils";

const GameName: string = "Simon";

export default class Dino {
    public static start(context: vscode.ExtensionContext) {
        const resolvedHtml = Utils.resolveGameHtml(context, html, GameName);
        const view = new GameView(resolvedHtml, {
            title: GameName
        });
        view.show();
    }
}
