/**
 * Generated Tool: usersTool_0308
 * Domain: Users
 * ID: 0308
 */
exports.usersTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0308:', error);
    throw error;
  }
};
