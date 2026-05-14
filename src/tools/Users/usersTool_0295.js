/**
 * Generated Tool: usersTool_0295
 * Domain: Users
 * ID: 0295
 */
exports.usersTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0295:', error);
    throw error;
  }
};
