require "test_helper"

class RememberPiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get remember_pi_index_url
    assert_response :success
  end
end
