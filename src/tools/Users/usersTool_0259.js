/**
 * Generated Tool: usersTool_0259
 * Domain: Users
 * ID: 0259
 */
exports.usersTool_0259 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0259:', error);
    throw error;
  }
};
