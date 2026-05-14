/**
 * Generated Tool: usersTool_0461
 * Domain: Users
 * ID: 0461
 */
exports.usersTool_0461 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0461:', error);
    throw error;
  }
};
