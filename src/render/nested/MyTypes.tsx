import { Link, LinkProps, RouteProps, Route } from "react-router-dom";
import * as React from "react";

export type R =
    "/"
    | "/about"
    | "/home"
    | "/topics"
    | "/topics/rendering"
    | "/topics/props-v-state"
    | "/topics/components/:a/:b"
    | "/topics/components/"

export const MyRoute = (props: RouteProps & { path?: R }) => <Route {...props} />
export const MyLink = (props: LinkProps & { to?: R }) => <Link {...props} />