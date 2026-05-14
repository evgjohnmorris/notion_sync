/**
 * Generated Tool: usersTool_0749
 * Domain: Users
 * ID: 0749
 */
exports.usersTool_0749 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0749:', error);
    throw error;
  }
};
