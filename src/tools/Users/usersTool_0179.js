/**
 * Generated Tool: usersTool_0179
 * Domain: Users
 * ID: 0179
 */
exports.usersTool_0179 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0179:', error);
    throw error;
  }
};
