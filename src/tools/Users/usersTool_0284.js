/**
 * Generated Tool: usersTool_0284
 * Domain: Users
 * ID: 0284
 */
exports.usersTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0284:', error);
    throw error;
  }
};
