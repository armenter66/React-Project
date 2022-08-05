import {
	ADD_PERSON_TO_FAVOURITE,
	REMOVE_PERSON_TO_FAVOURITE,
} from '../constans/actionTypes';

export const setPersonToFavourite = (person) => ({
	type: ADD_PERSON_TO_FAVOURITE,
	payload: person,
});

export const removePersonFromFavourite = (personId) => ({
	type: REMOVE_PERSON_TO_FAVOURITE,
	payload: personId,
});
