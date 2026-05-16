

use enum_id_derive::EnumId;


#[derive(EnumId, Debug, PartialEq)]
enum SomethingToTest {
    ThisIsTesting,
    SomeOtherTest,
}


#[test]
fn it_creates_name() {
    assert_eq!(SomethingToTest::ThisIsTesting.name(), "ThisIsTesting");
}

#[test]
fn it_creates_another_name() {
    assert_eq!(SomethingToTest::SomeOtherTest.name(), "SomeOtherTest");
}

#[test]
fn it_enumerates_values() {
    assert_eq!(SomethingToTest::values(), vec!(SomethingToTest::ThisIsTesting, SomethingToTest::SomeOtherTest));
}
