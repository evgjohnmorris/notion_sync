/**
 * Generated Tool: usersTool_0917
 * Domain: Users
 * ID: 0917
 */
exports.usersTool_0917 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0917:', error);
    throw error;
  }
};
