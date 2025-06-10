import { useState } from '#app';

export const useSessionUser = () => useState('session-user', () => null);
