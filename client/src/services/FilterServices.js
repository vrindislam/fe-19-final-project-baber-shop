import Ajax from "./Ajax";

class FilterServices {
  async getFiltersByType (filterTypes) {
    const requestedFilters = {};
    for (const filter of filterTypes) {
      const res = await Ajax.get(`/filters/${filter}`);
      if (res?.length > 0) requestedFilters[filter] = res;
    }
    return requestedFilters;
  }
}

export default new FilterServices();
