import { ulid } from 'ulid'

export function generateUid() {
	return `ID_${ulid()}`
}
