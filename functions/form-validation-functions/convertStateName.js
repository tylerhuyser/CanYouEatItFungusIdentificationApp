function convertStateName(state) {
  console.log(state)
  switch (state) {
    case 'AL':
      state = "Alabama";
      break;
    case 'AK':
      state = "Alaska";
      break;
    case 'AS':
      state = "American Samoa";
      break;
    case 'AZ':
      state = "Arizona";
      break;
    case 'AR':
      state = "Arkansas";
      break;
    case 'CA':
      state = "California";
      break;
    case 'CO':
      state = "Colorado";
      break;
    case 'CT':
      state = "Connecticut";
      break;
    case 'DE':
      state = "Delaware";
      break;
    case 'DC':
      state = "District of Coumbia";
      break;
    case 'FM':
      state = "Federated States of Micronesia";
      break;
    case 'FL':
      state = "Flordia";
      break;
    case 'GA':
      state = "Georgia";
      break;
    case 'GU':
      state = "Guam";
      break;
    case 'HI':
      state = "Hawaii";
      break;
    case 'ID':
      state = "Idaho";
      break;
    case 'IL':
      state = "Illinois";
      break;
    case 'IN':
      state = "Indiana";
      break;
    case 'IA':
      state = "Iowa";
      break;
    case 'KS':
      state = "Kansas";
      break;
    case 'KY':
      state = "Kentucky";
      break;
    case 'LA':
      state = "Louisiana";
      break;
    case 'ME':
      state = "Maine";
      break;
    case 'MH':
      state = "Marshall Islands";
      break;
    case 'MD':
      state = "Maryland";
      break;
    case 'MA':
      state = "Massachusetts";
      break;
    case 'MI':
      state = "Michigan";
      break;
    case 'MN':
      state = "Minnesota";
      break;
    case 'MS':
      state = "Mississippi";
      break;
    case 'MO':
      state = "MISSOURI";
      break;
    case 'MT':
      state = "Montana";
      break;
    case 'NE':
      state = "Nebraska";
      break;
    case 'NV':
      state = "Nevada";
      break;
    case 'NH':
      state = "New Hampshire";
      break;
    case 'NJ':
      state = "New Jersey";
      break;
    case 'NM':
      state = "New Mexico";
      break;
    case 'NY':
      state = "New York";
      break;
    case 'NC':
      state = "North Carolina";
      break;
    case 'ND':
      state = "North Dakota";
      break;
    case 'MP':
      state = "Northern Mariana Islands";
      break;
    case 'OH':
      state = "Ohio";
      break;
    case 'OK':
      state = "Oklahoma";
      break;
    case 'OR':
      state = "Oregon";
      break;
    case 'PW':
      state = "Palau";
      break;
    case 'PA':
      state = "Pennsylvania";
      break;
    case 'PR':
      state = "Puerto Rico";
      break;
    case 'RI':
      state = "Rhode Island";
      break;
    case 'SC':
      state = "South Carolina";
      break;
    case 'SD':
      state = "South Dakota";
      break;
    case 'TN':
      state = "Tennessee";
      break;
    case 'TX':
      state = "Texas";
      break;
    case 'UT':
      state = "Utah";
      break;
    case 'VT':
      state = "Vermont";
      break;
    case 'VI':
      state = "Virgin Islands";
      break;
    case 'VA':
      state = "Virginia";
      break;
    case 'WA':
      state = "Washington";
      break;
    case 'WV':
      state = "West Virginia";
      break;
    case 'WI':
      state = "Wisconsin";
      break;
    case 'WY':
      state = "Wyoming";
      break;
    default:
      state = `${state}`
  }
  console.log(state)
  return state
}

export default convertStateName