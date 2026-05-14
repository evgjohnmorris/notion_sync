/**
 * Generated Tool: usersTool_0159
 * Domain: Users
 * ID: 0159
 */
exports.usersTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0159:', error);
    throw error;
  }
};
