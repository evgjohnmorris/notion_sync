/**
 * Generated Tool: usersTool_0328
 * Domain: Users
 * ID: 0328
 */
exports.usersTool_0328 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0328:', error);
    throw error;
  }
};
