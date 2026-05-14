/**
 * Generated Tool: usersTool_0108
 * Domain: Users
 * ID: 0108
 */
exports.usersTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0108:', error);
    throw error;
  }
};
