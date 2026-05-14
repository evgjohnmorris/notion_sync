/**
 * Generated Tool: usersTool_0697
 * Domain: Users
 * ID: 0697
 */
exports.usersTool_0697 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0697:', error);
    throw error;
  }
};
