/**
 * Generated Tool: usersTool_0787
 * Domain: Users
 * ID: 0787
 */
exports.usersTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0787:', error);
    throw error;
  }
};
