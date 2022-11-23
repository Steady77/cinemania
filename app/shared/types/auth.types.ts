import { NextPage } from 'next';

export type RoleType = {
	isAdminPage?: boolean;
	isUserPage?: boolean;
};

export type AuthNextPage<T = {}> = NextPage<T> & RoleType;

export type ComponentRoleType = { Component: RoleType };
