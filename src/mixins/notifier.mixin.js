export default {
  methods: {
    notify(options = {}) {
      let settings = Object.assign(
        {
          message: '', // notification text
          type: 'success', // info, success, warning, error, offline
          bottom: true,
          hideIcon: true,
          showClose: true,
          closeDelay: 5000,
        },
        options
      );

      this.$notify(settings);
    },
  },
};
