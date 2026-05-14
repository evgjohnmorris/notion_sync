/**
 * Generated Tool: usersTool_0246
 * Domain: Users
 * ID: 0246
 */
exports.usersTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0246:', error);
    throw error;
  }
};
