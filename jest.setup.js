class JestAssertionError extends Error {
  constructor(result, callsite) {
    super(result.message());
    this.matcherResult = result;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, callsite);
    }
  }
}

const wrapMatcher = (matcher) => {
  const newMatcher = (...args) => {
    try {
      return matcher(...args);
    } catch (error) {
      if (!error.matcherResult) {
        throw error;
      }
      const { matcherResult } = error;

      const message = () =>
        matcherResult
          .message()
          .slice(0, matcherResult.message().indexOf("Expected:"));

      throw new JestAssertionError({ ...matcherResult, message }, newMatcher);
    }
  };
  return newMatcher;
};

const wrapMatchers = (matchers) => {
  return Object.keys(matchers).reduce((acc, name) => {
    const matcher = matchers[name];

    if (typeof matcher === "function") {
      return {
        ...acc,
        [name]: wrapMatcher(matcher),
      };
    }

    return {
      ...acc,
      [name]: wrapMatchers(matcher),
    };
  }, {});
};

const wrapMessage = (expect) => {
  let expectProxy = Object.assign(
    (actual) => wrapMatchers(expect(actual)),
    expect
  );

  expectProxy.extend = (o) => {
    expect.extend(o);
    expectProxy = Object.assign(expectProxy, expect);
  };

  return expectProxy;
};

global.expect = wrapMessage(global.expect);
