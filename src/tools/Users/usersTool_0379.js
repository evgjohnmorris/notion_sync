/**
 * Generated Tool: usersTool_0379
 * Domain: Users
 * ID: 0379
 */
exports.usersTool_0379 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0379:', error);
    throw error;
  }
};
