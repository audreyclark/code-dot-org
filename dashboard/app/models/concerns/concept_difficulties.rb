module ConceptDifficulties
  extend ActiveSupport::Concern

  CONCEPTS = %w(
    sequencing
    debugging
    repeat_loops
    repeat_until_while
    for_loops
    events
    variables
    functions
    functions_with_params
    conditionals
  )
  # The maximum difficulty ranking for a concept.
  # NOTE: This number is tied to DB columns. DO NOT EDIT without a DB migration.
  MAXIMUM_CONCEPT_DIFFICULTY = 5

end
