/**
 * Generated Tool: usersTool_0084
 * Domain: Users
 * ID: 0084
 */
exports.usersTool_0084 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0084:', error);
    throw error;
  }
};
