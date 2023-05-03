import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getStatusFilter = state => state.filters.status;

export const selectContacts = createSelector(
    [getContacts, getStatusFilter],
    // Функція перетворювач
    (contacts, filter) => {
      return contacts.filter(element =>
        element.name.toUpperCase().includes(filter.toUpperCase())
      );
    }
  );