/**
 * Generated Tool: usersTool_0192
 * Domain: Users
 * ID: 0192
 */
exports.usersTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0192:', error);
    throw error;
  }
};
