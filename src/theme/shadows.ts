export const SHADOWS = {
  card: {
    shadowColor: '#000',

    shadowOpacity: 0.06,

    shadowRadius: 16,

    shadowOffset: {
      width: 0,
      height: 6,
    },

    elevation: 4,
  },

  floating: {
    shadowColor: '#000',

    shadowOpacity: 0.18,

    shadowRadius: 20,

    shadowOffset: {
      width: 0,
      height: 10,
    },

    elevation: 10,
  },

  tabBar: {
    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 30,

    shadowOffset: {
      width: 0,
      height: 10,
    },

    elevation: 10,

    overflow: 'hidden' as const,
  },
}