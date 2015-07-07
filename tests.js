Tinytest.add('jss:ga::test environment', function (test) {
  test.notEqual(typeof GAnalytics, 'undefined',
    'test environment not initialized `GAnalytics`'
  );
});