module Example where

import ElmTestBDDStyle exposing (..)
import Check.Investigator exposing (..)

tests : Test
tests =
    describe "A Test Suite"
        [ it "adds two numbers" <|
            expect (3 + 7) toBe 10

        , it "fails for non-sense stuff" <|
            expect True toBe False

        , itAlways "ends up with the same list when reversing twice" <|
            expectThat
              (\list -> List.reverse (List.reverse list))
            isTheSameAs
              (identity)
            forEvery
              (list int)
        ]
