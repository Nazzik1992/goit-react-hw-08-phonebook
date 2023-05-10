import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilter = state => state.filter.request;
export const getFilterNumber = state => state.filter.number;

export const selectContacts = createSelector(
    [getContacts, getFilter, getFilterNumber],
    // Функція перетворювач
    (contacts, filter, filterNumber) => {
      return contacts.filter(
        element =>
          element.name.toUpperCase().includes(filter.toUpperCase()) &&
          element.number.includes(filterNumber)
      );
    }
  );