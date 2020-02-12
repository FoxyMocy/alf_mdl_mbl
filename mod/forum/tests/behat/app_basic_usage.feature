@mod @mod_forum @app @javascript
Feature: Test basic usage of forum activity in app
  In order to participate in the forum while using the mobile app
  As a student
  I need basic forum functionality to work

  Background:
    Given the following "courses" exist:
      | fullname | shortname |
      | Course 1 | C1        |
    And the following "users" exist:
      | username |
      | student1 |
      | student2 |
      | teacher1 |
      | teacher2 |
    And the following "course enrolments" exist:
      | user     | course | role    |
      | student1 | C1     | student |
      | student2 | C1     | student |
      | teacher1 | C1     | editingteacher |
      | teacher2 | C1     | editingteacher |
    And the following "activities" exist:
      | activity   | name            | intro       | course | idnumber | groupmode | assessed | scale |
      | forum      | Test forum name | Test forum  | C1     | forum    | 0         | 1        | 1     |

    @app @3.8.0 @OK
    Scenario: Student starts a discussion
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "My happy subject" in the app
    And I set the field "Message" to "An awesome message" in the app
    And I press "Post to forum" in the app
    Then I should see "My happy subject"
    And I press "My happy subject" in the app
    And I should see "An awesome message"

    @app_from3.7
    Scenario: Student posts a reply
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    And I press "DiscussionSubject" in the app
    And I press "Reply" in the app
    And I set the field "Write your reply" to "ReplyMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionMessage"
    And I should see "ReplyMessage"

    @app @3.8.0 @mobile @OK
    Scenario: Student stars a discussion (mobile)
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test star" in the app
    And I set the field "Message" to "Auto-test star message" in the app
    And I press "Post to forum" in the app
    And I wait "60" seconds
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test star" in the app
    And I set the field "Message" to "Auto-test no star message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test star" near "Last post a minute ago" in the app
    Then I should see "Auto-test star message"
    And I press the back button in the app
    And I press "Display options" near "Last post a minute ago" in the app
    And I press "Star this discussion" in the app
    And I press "Auto-test star" near "Last post a minute ago" in the app
    Then I should see "Auto-test star message"
    And I press the back button in the app
    And I press "Auto-test star" near "Last post a few seconds ago" in the app
    Then I should see "Auto-test no star message"
    And I press the back button in the app
    And I press "Display options" near "Last post a minute ago" in the app
    And I press "Unstar this discussion" in the app
    And I press "Auto-test star" near "Last post a few seconds ago" in the app
    Then I should see "Auto-test no star message"
    And I press the back button in the app
    And I press "Auto-test star" near "Last post a minute ago" in the app
    Then I should see "Auto-test star message"

    @app @3.8.0 @tablet @OK
    Scenario: Student stars a discussion (tablet)
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test star" in the app
    And I set the field "Message" to "Auto-test star message" in the app
    And I press "Post to forum" in the app
    And I wait "60" seconds
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test star" in the app
    And I set the field "Message" to "Auto-test no star message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test star" near "Last post a minute ago" in the app
    Then I should see "Auto-test star message"
    And I press "Display options" near "Last post a minute ago" in the app
    And I press "Star this discussion" in the app
    And I press "Auto-test star" near "Last post a minute ago" in the app
    Then I should see "Auto-test star message"
    And I press "Auto-test star" near "Last post a few seconds ago" in the app
    Then I should see "Auto-test no star message"
    And I press "Display options" near "Last post a minute ago" in the app
    And I press "Unstar this discussion" in the app
    And I press "Auto-test star" near "Last post a few seconds ago" in the app
    Then I should see "Auto-test no star message"
    And I press "Auto-test star" near "Last post a minute ago" in the app
    Then I should see "Auto-test star message"

    @app @3.8.0 @OK
    Scenario: Teacher star and pin a discussion
    When I enter the app
    And I log in as "teacher1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test star" in the app
    And I set the field "Message" to "Auto-test star message" in the app
    And I press "Post to forum" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test pin" in the app
    And I set the field "Message" to "Auto-test pin message" in the app
    And I press "Post to forum" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Display options" near "Auto-test star" in the app
    And I press "Star this discussion" in the app
    And I press "Display options" near "Auto-test pin" in the app
    And I press "Pin this discussion" in the app
    And I should see "Auto-test pin"
    And I should see "Auto-test star"
    And I should see "Auto-test"
    And I press "Display options" near "Auto-test pin" in the app
    And I press "Unpin this discussion" in the app
    And I press "Display options" near "Auto-test star" in the app
    And I press "Unstar this discussion" in the app
    Then I should see "Auto-test star"
    And I should see "Auto-test pin"

    @app_upto3.6.0 @OK
    Scenario: Teacher checks pin and star in 3.6
    When I enter the app
    And I log in as "teacher1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test" in the app
    And I press "Information" in the app
    Then I should not see "Star this discussion"
    And I should not see "Pin this discussion"

    @app @3.8.0 @mobile @OK
    Scenario: Edit a not sent reply offline (mobile)
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test" near "Sort by last post creation date in descending order" in the app
    And I switch offline mode to "true"
    And I press "Reply" in the app
    And I set the field "Write your reply..." to "not sent reply" in the app
    And I press "Post to forum" in the app
    And I press "Display options" near "not sent reply" in the app
    Then I should see "Edit"
    And I press "Edit" in the app
    And I set the field "Write your reply..." to "not sent reply edited" in the app
    And I press "Post to forum" in the app
    Then I should see "Not sent"
    And I should see "This Discussion has offline data to be synchronised"
    And I switch offline mode to "false"
    And I press the back button in the app
    And I press "Auto-test" near "Sort by last post creation date in descending order" in the app
    Then I should not see "Not sent"
    And I should not see "This Discussion has offline data to be synchronised"

    @app @3.8.0 @tablet @OK
    Scenario: Edit a not sent reply offline (tablet)
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test" near "Sort by last post creation date in descending order" in the app
    And I switch offline mode to "true"
    And I press "Reply" in the app
    And I set the field "Write your reply..." to "not sent reply" in the app
    And I press "Post to forum" in the app
    And I press "Display options" near "not sent reply" in the app
    Then I should see "Edit"
    And I press "Edit" in the app
    And I set the field "Write your reply..." to "not sent reply edited" in the app
    And I press "Post to forum" in the app
    Then I should see "Not sent"
    And I should see "This Discussion has offline data to be synchronised"
    And I switch offline mode to "false"
    And I press the back button in the app
    And I press "Test forum name" in the app
    Then I should not see "Not sent"
    And I should not see "This Discussion has offline data to be synchronised"

    @app @3.8.0 @OK
    Scenario: Edit a not sent new discussion offline
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I switch offline mode to "true"
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test" in the app
    And I set the field "Message" to "Auto-test message edited" in the app
    And I press "Post to forum" in the app
    Then I should see "This Forum has offline data to be synchronised."
    And I switch offline mode to "false"
    And I press "Auto-test" in the app
    And I press "Post to forum" in the app
    Then I should not see "This Forum has offline data to be synchronised."
    And I press "Auto-test" near "Sort by last post creation date in descending order" in the app
    And I should see "Auto-test message edited"

    @app @3.8.0 @OK
    Scenario: Edit a forum post (only online)
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    Then I should see "Auto-test"
    And I press the back button in the app
    And I press "Display options" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test forum name" in the app
    And I press "Test forum name" in the app
    And I press "Auto-test" near "Sort by last post creation date in descending order" in the app
    And I press "Display options" near "Reply" in the app
    Then I should see "Edit"
    And I press "Edit" in the app
    And I set the field "Write your reply..." to "Auto-test message edited" in the app
    And I press "Save changes" in the app
    And I switch offline mode to "true"
    And I press "Display options" near "Reply" in the app
    Then I should see "There was a problem connecting to the site. Please check your connection and try again."
    And I press "OK" in the app
    And I should not see "Edit"

    @app @3.8.0 @OK
    Scenario: Delete a forum post (only online)
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    Then I should see "Auto-test"
    And I press the back button in the app
    And I press "Display options" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test forum name" in the app
    And I press "Test forum name" in the app
    And I press "Auto-test" near "Sort by last post creation date in descending order" in the app
    And I press "Display options" near "Reply" in the app
    Then I should see "Delete"
    And I press "Delete" in the app
    And I press "Cancel" in the app
    And I switch offline mode to "true"
    And I press "Display options" near "Reply" in the app
    Then I should see "There was a problem connecting to the site. Please check your connection and try again."
    And I press "OK" in the app
    And I should not see "Delete"
    And I switch offline mode to "false"
    And I press "Display options" near "Reply" in the app
    And I press "Delete" in the app
    And I press "Delete" in the app
    Then I should not see "Auto-test"

    @app @3.8.0 @mobile @OK
    Scenario: Add/view ratings (mobile)
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Auto-test" in the app
    And I press "Reply" in the app
    And I set the field "Write your reply..." to "test2" in the app
    And I press "Post to forum" in the app
    When I enter the app
    And I log in as "teacher1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Auto-test" in the app
    And I press "None" near "Auto-test message" in the app
    And I press "1" near "Cancel" in the app
    And I switch offline mode to "true"
    And I press "None" near "test2" in the app
    And I press "0" near "Cancel" in the app
    Then I should see "Data stored in the device because it couldn't be sent. It will be sent automatically later."
    And I should see "Average of ratings: -"
    And I should see "Average of ratings: 1"
    And I switch offline mode to "false"
    And I press the back button in the app
    Then I should see "This Forum has offline data to be synchronised."
    And I press "Display options" near "Test forum name" in the app
    And I press "Synchronise now" in the app
    And I should not see "This Forum has offline data to be synchronised."
    And I press "Auto-test" in the app
    Then I should see "Average of ratings: 1"
    And I should see "Average of ratings: 0"
    And I should not see "Average of ratings: -"
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Auto-test" in the app
    Then I should see "Average of ratings: 1"
    And I should see "Average of ratings: 0"
    And I should not see "Average of ratings: -"

    @app @3.8.0 @tablet @OK
    Scenario: Add/view ratings (tablet)
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "close" in the app
    And I set the field "Subject" to "Auto-test" in the app
    And I set the field "Message" to "Auto-test message" in the app
    And I press "Post to forum" in the app
    And I press "Reply" in the app
    And I set the field "Write your reply..." to "test2" in the app
    And I press "Post to forum" in the app
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "teacher1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "None" near "Auto-test message" in the app
    And I press "1" near "Cancel" in the app
    And I switch offline mode to "true"
    And I press "None" near "test2" in the app
    And I press "0" near "Cancel" in the app
    Then I should see "Data stored in the device because it couldn't be sent. It will be sent automatically later."
    And I should see "Average of ratings: -"
    And I should see "Average of ratings: 1"
    And I switch offline mode to "false"
    Then I should see "This Forum has offline data to be synchronised."
    And I press "Display options" near "Test forum name" in the app
    And I press "Synchronise now" in the app
    And I should not see "This Forum has offline data to be synchronised."
    Then I should see "Average of ratings: 1"
    And I should see "Average of ratings: 0"
    And I should not see "Average of ratings: -"
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    Then I should see "Average of ratings: 1"
    And I should see "Average of ratings: 0"
    And I should not see "Average of ratings: -"

  @app @3.8.0 @mobile @OK
  Scenario: Student replies a post offline mobile
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    And I press the back button in the app
    And I press "Display options" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test forum name" in the app
    And I press "Test forum name" in the app
    And I press "DiscussionSubject" in the app
    And I switch offline mode to "true"
    And I press "Reply" in the app
    And I set the field "Write your reply" to "ReplyMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionMessage"
    And I should see "ReplyMessage"
    And I should see "Not sent"
    And I press the back button in the app
    And I switch offline mode to "false"
    And I press "DiscussionSubject" in the app
    Then I should see "DiscussionMessage"
    And I should see "ReplyMessage"
    And I should not see "Not sent"

    @app @3.8.0 @tablet @OK
  Scenario: Student replies a post offline tablet
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    And I press the back button in the app
    And I press "Display options" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test forum name" in the app
    And I press "Test forum name" in the app
    And I press "DiscussionSubject" near "Sort by last post creation date in descending order" in the app
    And I switch offline mode to "true"
    And I press "Reply" in the app
    And I set the field "Write your reply" to "ReplyMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionMessage"
    And I should see "ReplyMessage"
    And I should see "Not sent"
    And I press the back button in the app
    And I switch offline mode to "false"
    And I press "Test forum name" in the app
    And I press "DiscussionSubject" near "Sort by last post creation date in descending order" in the app
    Then I should see "DiscussionMessage"
    And I should see "ReplyMessage"
    And I should not see "Not sent"

    @app @3.8.0 @OK
    Scenario: Student creates a new discussion offline and sync forum
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I switch offline mode to "true"
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionSubject"
    And I should see "Not sent"
    And I should see "This Forum has offline data to be synchronised."
    And I switch offline mode to "false"
    And I press the back button in the app
    And I press "Test forum name" in the app
    And I press "Display options" near "Test forum name" in the app
    And I press "Refresh discussions" in the app
    And I press "DiscussionSubject" near "Sort by last post creation date in descending order" in the app
    Then I should see "DiscussionSubject"
    And I should see "DiscussionMessage"
    And I should not see "Not sent"
    And I should not see "This Forum has offline data to be synchronised."

    @app @3.8.0 @OK
    Scenario: Student creates a new discussion offline and auto-sync forum
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I switch offline mode to "true"
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionSubject"
    And I should see "Not sent"
    And I should see "This Forum has offline data to be synchronised."
    And I switch offline mode to "false"
    And I wait "600" seconds
    And I should not see "Not sent"
    And I press "DiscussionSubject" near "Sort by last post creation date in descending order" in the app
    Then I should see "DiscussionSubject"
    And I should see "DiscussionMessage"
    And I should not see "Not sent"
    And I should not see "This Forum has offline data to be synchronised."

    @app @3.8.0 @mobile @OK
    Scenario: Prefetch mobile
    When I enter the app
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionSubject"
    And I press the back button in the app
    And I press "Display options" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test forum name" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject 2" in the app
    And I set the field "Message" to "DiscussionMessage 2" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionSubject"
    And I should see "DiscussionSubject 2"
    And I press the back button in the app
    And I switch offline mode to "true"
    And I press "Test forum name" in the app
    And I press "DiscussionSubject 2" in the app
    Then I should see "There was a problem connecting to the site. Please check your connection and try again."
    And I press "OK" in the app
    And I press the back button in the app
    And I press "DiscussionSubject" in the app
    Then I should see "DiscussionSubject"
    And I should see "DiscussionMessage"
    And I should not see "There was a problem connecting to the site. Please check your connection and try again."

    @app @3.8.0 @tablet @OK
    Scenario: Prefetch tablet
    When I enter the app
    And I change viewport size to "1280x1080"
    And I log in as "student1"
    And I press "Course 1" near "Course overview" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject" in the app
    And I set the field "Message" to "DiscussionMessage" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionSubject"
    And I press the back button in the app
    And I press "Display options" in the app
    And I press "Show download options" in the app
    And I press "cloud download" near "Test forum name" in the app
    And I press "Test forum name" in the app
    And I press "Add a new discussion topic" in the app
    And I set the field "Subject" to "DiscussionSubject 2" in the app
    And I set the field "Message" to "DiscussionMessage 2" in the app
    And I press "Post to forum" in the app
    Then I should see "DiscussionSubject"
    And I should see "DiscussionSubject 2"
    And I press the back button in the app
    And I switch offline mode to "true"
    And I press "refresh" near "Test forum name" in the app
    Then I should see "There was a problem connecting to the site. Please check your connection and try again."
    And I press "OK" in the app
    And I press "Test forum name" in the app
    And I press "DiscussionSubject" in the app
    Then I should see "DiscussionSubject"
    And I should see "DiscussionMessage"
    And I press the back button in the app
    And I switch offline mode to "false"
    And I press "refresh" near "Test forum name" in the app
    Then I should not see "There was a problem connecting to the site. Please check your connection and try again."