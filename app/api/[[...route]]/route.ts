import { Hono } from "hono";
import { handle } from "hono/vercel";
import crops from "./crops"
import farmers from "./farmers"

// export const runtime = 'edge'

const app = new Hono().basePath('/api')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
    .route("/crops", crops)
    .route("/farmers", farmers)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)

export type AppType = typeof routes