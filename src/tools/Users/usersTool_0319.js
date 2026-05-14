/**
 * Generated Tool: usersTool_0319
 * Domain: Users
 * ID: 0319
 */
exports.usersTool_0319 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0319:', error);
    throw error;
  }
};
