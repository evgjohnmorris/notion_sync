/**
 * Generated Tool: usersTool_0073
 * Domain: Users
 * ID: 0073
 */
exports.usersTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0073:', error);
    throw error;
  }
};
