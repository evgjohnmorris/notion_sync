/**
 * Generated Tool: usersTool_0166
 * Domain: Users
 * ID: 0166
 */
exports.usersTool_0166 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0166:', error);
    throw error;
  }
};
