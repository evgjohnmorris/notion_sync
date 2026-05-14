/**
 * Generated Tool: usersTool_0740
 * Domain: Users
 * ID: 0740
 */
exports.usersTool_0740 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0740:', error);
    throw error;
  }
};
