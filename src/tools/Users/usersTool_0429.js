/**
 * Generated Tool: usersTool_0429
 * Domain: Users
 * ID: 0429
 */
exports.usersTool_0429 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0429:', error);
    throw error;
  }
};
