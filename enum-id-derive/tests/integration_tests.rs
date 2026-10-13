use enum_id::EnumId;
use enum_id_derive::EnumId;

#[derive(EnumId, Debug, PartialEq)]
enum SomethingToTest {
    ThisIsTesting,
    SomeOtherTest,
}

#[derive(EnumId, Debug, PartialEq)]
enum AnotherThingToTest {
    Val,
    Other,
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
    assert_eq!(
        SomethingToTest::values(),
        vec!(
            SomethingToTest::ThisIsTesting,
            SomethingToTest::SomeOtherTest,
        )
    );
}

#[test]
fn it_enumerates_another_values() {
    assert_eq!(
        AnotherThingToTest::values(),
        vec!(
            AnotherThingToTest::Val,
            AnotherThingToTest::Other,
        )
    );
}
