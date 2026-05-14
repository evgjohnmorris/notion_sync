/**
 * Generated Tool: usersTool_0202
 * Domain: Users
 * ID: 0202
 */
exports.usersTool_0202 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0202:', error);
    throw error;
  }
};
